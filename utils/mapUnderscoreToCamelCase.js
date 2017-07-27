/**
 * Created by baoyinghai on 7/27/17.
 */

const firstUpperCase = str => str.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toUpperCase() + $2.toLowerCase());

const formatKey = key => key.split('_').map((str, index) => index ? firstUpperCase(str) : str).join('');

module.exports = function(obj) {
  return Object.keys(obj).reduce((ret, key) => {
    ret[formatKey(key)] = obj[key];
    return ret;
  }, {});
};