/**
 * Created by baoyinghai on 2/4/17.
 */
var connect = require('./connect');
var receiveMsg = require('./receiveMsg');
var mapManager = require('../framework/mapManager');

module.exports = {
  connect: connect,
  receiveMsg: receiveMsg,
  autoExecute: function(req, res) {
    console.log(req.url);
    console.log(mapManager.getHandler(req.url));
    if (mapManager.getHandler(req.url)) {
      mapManager.getHandler(req.url)(req, res);
    } else {
      res.json({
        res: 'no handler match'
      });
    }
  }
};