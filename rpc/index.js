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
    if (mapManager.getHandler(req.path)) {
      const handler = mapManager.getHandler(req.path)(req, res);
      if (!handler) {
        res.json({
          yogCode: 301,
          yogMsg: 'must return a promise'
        });
      } else {
        handler.catch(e => {
          res.json({
            yogCode: 302,
            yogMsg: e
          });
        })
      }
    } else {
      res.json({
        yogCode: 300,
        yogMsg: 'not match handler'
      });
    }
  }
};