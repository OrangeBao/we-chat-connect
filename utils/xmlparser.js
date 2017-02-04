/**
 * Created by baoyinghai on 2/4/17.
 */
var xml2js = require('xml2js');

function XML2JSON(xml) {
  var parser = new xml2js.Parser({ explicitArray: false });
  return new Promise((resolve, reject) => {
    parser.parseString(xml, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  });
}

function JSON2Xml(json) {
  var builder = new xml2js.Builder({ cdata: true, headless: true, rootName: 'xml' });
  return new Promise((resolve, reject) => {
    var xml = builder.buildObject(json);
    resolve(xml);
  });
}

module.exports = { XML2JSON, JSON2Xml }