/**
 * Created by baoyinghai on 7/26/17.
 */
var { controllerHandler } = require('../../framework/decorators');
var productionDao = require('./productionDao');

class ProductionController {

  @controllerHandler('/getAllProductions')
  getAllProductions (req, res) {
    productionDao.queryAll().then(data => {
      res.json(data);
    });
  }

}

module.exports = ProductionController;