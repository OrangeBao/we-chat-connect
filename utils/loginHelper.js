const https = require('https');

const options = {
  hostname: 'api.weixin.qq.com',
  port: 443,
  method: 'GET'
};

function createPath(jsCode) {
  return '/sns/jscode2session?appid=wx18f61c53a6240c2f&secre…a81&js_code=' + jsCode + '&grant_type=authorization_code';
}

module.exports = {
  send: function(jsCode) {
    return new Promise((resolve, reject) => {
      options.path = createPath(jsCode);
      const req = https.request(options, (res) => {
        res.on('data', (d) => {
          resolve(d);
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
      req.end();
    });
  }
}
