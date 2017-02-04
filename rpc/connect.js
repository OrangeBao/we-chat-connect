/**
 * Created by baoyinghai on 2/3/17.
 */

var { token } = require('../config');
var crypto = require('crypto');
var sha1 = crypto.createHash('SHA1');

module.exports = function(req, res) {
  var { timestamp, nonce, signature, echostr } = req.query;
  var str = [nonce, timestamp, token].sort().join('');
  sha1.update(str);
  var strSha1 = sha1.digest('hex').toString();
  console.log(strSha1);
  if (strSha1 === signature) {
    res.send(echostr);
  }
};