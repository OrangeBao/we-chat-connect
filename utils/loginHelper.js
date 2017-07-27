const https = require('https');
const config = require('../config');

const options = {
  hostname: 'api.weixin.qq.com',
  port: 443,
  method: 'GET'
};

function createPath(jsCode) {
  return '/sns/jscode2session?appid=' + config.appId + '&secret=' + config.appSecret + '&js_code=' + jsCode + '&grant_type=authorization_code';
}

module.exports = {
  send: function(jsCode) {
    return new Promise((resolve, reject) => {
      options.path = createPath(jsCode);
      const req = https.request(options, (res) => {
        res.on('data', (d) => {
          console.log('login success: ', d.toString());
          resolve(d.toString());
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
      req.end();
    });
  }
}
