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

}

module.exports = LoginController;