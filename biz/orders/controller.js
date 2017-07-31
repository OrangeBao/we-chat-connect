var { controllerHandler } = require('../../framework/decorators');
var orderDao = require('./orderDao');
var stringUtil = require('../../utils/mapUnderscoreToCamelCase');

class OrdersController {

  @controllerHandler('/getAllOrdersByTime')
  getAllOrdersOrderByCreateTime(req, res) {
    return orderDao.queryAllOrders().then(data => {
      if (data) {
        return data.map(stringUtil);
      }
      return data;
    }).then(data => {
      res.json(data);
    });
  }

  @controllerHandler('/getAllOrdersByTimeAndPage')
  getAllOrdersOrderByCreateTimeAndPage(req, res) {
    const page = req.query.currentPage || req.body.currentPage;
    const pageSize = req.query.pageSize || req.body.pageSize;
    return orderDao.queryAllOrdersByPage(page, pageSize).then(page => {
      const {data, count} = page;
      if (data) {
        page.data = data.map(stringUtil);
      }
      return page;
    }).then(data => {
      res.json(data);
    });
  }

  @controllerHandler('/getAllOrders')
  getAllOrders(req, res) {
    const openId = req.query.openId || req.body.openId;
    return orderDao.queryOrdersById(openId).then(data => {
      if (data) {
        return data.map(stringUtil);
      }
      return data;
    }).then(data => {
      res.json(data);
    });
  }

  @controllerHandler('/changeOrderState')
  updateOrderStatue(req, res) {
    const orderId = req.query.orderId || req.body.orderId;
    const statue = req.query.statue || req.body.statue;
    return orderDao.updateOrderById(orderId, statue).then(data => {
      res.json({});
    });
  }

  @controllerHandler('/addOrder')
  insertOrder(req, res) {
    const openId = req.query.openId || req.body.openId;
    const desc = req.query.desc || req.body.desc;
    const count = req.query.count || req.body.count;
    const money = req.query.money || req.body.money;
    const statue = req.query.statue || req.body.statue;
    const addressId = req.query.addressId || req.body.addressId;
    return orderDao.insertOrder(openId, desc, count, money, statue, addressId).then(data => {
      res.end();
    });
  }

}

module.exports = OrdersController;
