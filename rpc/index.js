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
    console.log('path: ', req.path);
    console.log('query: ', req.query);

    // console.log(mapManager.getHandler(req.path));
    if (mapManager.getHandler(req.path)) {
      mapManager.getHandler(req.path)(req, res);
    } else {
      res.json({
        res: 'no handler match'
      });
    }
  }
};