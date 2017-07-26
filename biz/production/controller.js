/**
 * Created by baoyinghai on 7/26/17.
 */
var { controllerHandler } = require('../../framework/decorators');
var productionDao = require('../../dao/productionDao');

class ProductionController {

  @controllerHandler('/getAllProductions')
  getAllProductions (req, res) {
    productionDao.queryAll().then(data => {
      res.json({
        res: data
      });
    });
  }

}

module.exports = ProductionController;