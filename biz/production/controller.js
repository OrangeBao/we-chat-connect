/**
 * Created by baoyinghai on 7/26/17.
 */
var { controllerHandler } = require('../../framework/decorators');
var productionDao = require('./productionDao');
var stringUtil = require('../../utils/mapUnderscoreToCamelCase');
class ProductionController {

  @controllerHandler('/getAllProductions')
  getAllProductions (req, res) {
    return productionDao.queryAll().then(data => {
      if (data) {
        return data.map(stringUtil);
      }
      return data;
    }).then(data => {
      res.json(data);
    });
  }

}

module.exports = ProductionController;