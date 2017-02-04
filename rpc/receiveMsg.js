/**
 * Created by baoyinghai on 2/4/17.
 */

var { XML2JSON, JSON2Xml } = require('../utils/xmlparser');
var { msgServer } = require('../server');
module.exports = function(req, res) {
  XML2JSON(req.body)
    .then(data => msgServer(data.xml,res))
    .then(ret => {
      if (ret === "" || ret === null) {
        res.send("");
      } else {
        JSON2Xml(ret).then(r => {
          res.send(r);
        })
      }
    });
};