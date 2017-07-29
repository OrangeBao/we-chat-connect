/**
 * Created by baoyinghai on 7/26/17.
 */
var { controllerHandler } = require('../../framework/decorators');
var httpsRequest = require('../../utils/loginHelper');

class LoginController {

  @controllerHandler('/onLogin')
  onLogin (req, res) {
    return httpsRequest.send(req.query.code).then(response => res.json(response));
  }

  @controllerHandler('/managerLogin')
  managerLogin(req, res) {
    const userName = req.body.userName;
    const userPwd = req.body.password;
    return new Promise((resolve, reject) => {
      if (userName !== 'manager') {
        resolve({code: 0});
      } else if (userPwd !== '11111111'){
        resolve({code: 1});
      } else {
        resolve({code: 2});
      }
    }).then(data => res.json(data));
  }

}

module.exports = LoginController;