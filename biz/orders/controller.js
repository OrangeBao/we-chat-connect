var { controllerHandler } = require('../../framework/decorators');
var orderDao = require('./orderDao');
var stringUtil = require('../../utils/mapUnderscoreToCamelCase');

class OrdersController {

  @controllerHandler('/getAllOrders')
  getAllOrders(req, res) {
    const openId = req.query.openId || req.body.openId;
    orderDao.queryOrdersById(openId).then(data => {
      if (data) {
        return data.map(stringUtil);
      }
      return data;
    }).then(data => {
      res.json(data);
    }).catch(e => console.log(e));
  }

  @controllerHandler('/changeOrderState')
  updateOrderStatue(req, res) {
    const orderId = req.query.orderId || req.body.orderId;
    const statue = req.query.statue || req.body.statue;
    orderDao.updateOrderById(orderId, statue).then(data => {
      res.end();
    }).catch(e => console.log(e))
  }

  @controllerHandler('/addOrder')
  insertOrder(req, res) {
    const openId = req.query.openId || req.body.openId;
    const desc = req.query.desc || req.body.desc;
    const count = req.query.count || req.body.count;
    const money = req.query.money || req.body.money;
    const statue = req.query.statue || req.body.statue;
    const addressId = req.query.addressId || req.body.addressId;
    orderDao.insertOrder(openId, desc, count, money, statue, addressId).then(data => {
      res.end();
    }).catch(e => console.log(e));
  }

}

module.exports = OrdersController;
