/**
 * Created by baoyinghai on 7/26/17.
 */
var { controllerHandler } = require('../../framework/decorators');
var httpsRequest = require('../../utils/loginHelper');

class LoginController {

  @controllerHandler('/onLogin')
  onLogin (req, res) {
    httpsRequest.send(req.body.code).then(response => res.json(response))
  }

}

module.exports = LoginController;