var { controllerHandler } = require('../../framework/decorators');
var addressDao = require('./addressDao');
var stringUtil = require('../../utils/mapUnderscoreToCamelCase');

class AddressController {

  @controllerHandler('/getAllAddress')
  getUserAddress (req, res) {
    return addressDao.queryAddressById(req.query.openId || req.body.openId).then(data => {
      if (data) {
        return data.map(stringUtil);
      }
      return data;
    }).then(data => {
      res.json(data);
    });
  }

  @controllerHandler('/updateAddress')
  updateAddress(req, res) {
    const addressId = req.query.addressId || req.body.addressId;
    const address = req.query.address || req.body.address;
    const name = req.query.name || req.body.name;
    const sex = req.query.sex || req.body.sex;
    const phone = req.query.phone || req.body.phone;
    return addressDao.updateAddressById(addressId, address, name, sex, phone).then(data => {
      res.end();
    });
  }

  @controllerHandler('/addAddress')
  insertAddress(req, res) {
    const openId = req.query.openId || req.body.openId;
    const address = req.query.address || req.body.address;
    const name = req.query.name || req.body.name;
    const sex = req.query.sex || req.body.sex;
    const phone = req.query.phone || req.body.phone;
    return addressDao.insertAddress(openId, address, name, sex, phone).then(data => {
      res.end();
    })
  }

}

module.exports = AddressController;