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

  @controllerHandler(('/modifyProduction'))
  modifyProduction(req, res) {
    const production = Object.assign({}, req.query, req.body);
    return productionDao.modifyProduction(production).then(() => res.json({}));
  }

  @controllerHandler('/addProduction')
  addProduction(req, res) {
    const production = Object.assign({}, req.query, req.body);
    return productionDao.addProduction(production).then(() => res.json({}));
  }

  @controllerHandler('/deleteProduction')
  deleteProduction(req, res) {
    const productionId = req.query.productionId || req.body.productionId;
    return productionDao.deleteProduction(productionId).then(() => {
      res.json({});
    });
  }

}

module.exports = ProductionController;