/**
 * Created by baoyinghai on 7/26/17.
 */
var mapManager = require('./mapManager');

module.exports = {
  controllerHandler: function(url) {
    return function(target,  property, descriptor) {
      mapManager.addController(url, target[property]);
    };
  }
};