/**
 * Created by baoyinghai on 7/26/17.
 */
const production = require('./production/controller');
const login      = require('./login/controller');
const address    = require('./address/controller');
const orders     = require('./orders/controller');
module.exports = {
  production,
  login,
  address,
  orders
};