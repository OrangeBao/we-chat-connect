/**
 * Created by baoyinghai on 7/26/17.
 */
const pool = require('../cache/mysql');
module.exports = {
  queryAll: function() {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query('SELECT * FROM production', function (error, results, fields) {
          if (error) reject(error);
          resolve(results);
        });
      });
    });
  }
};