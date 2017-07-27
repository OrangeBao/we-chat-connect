var mysql = require('mysql');
const config = require('../config');
console.log(config.mysqlOption);
var pool  = mysql.createPool(config.mysqlOption);


// pool.getConnection(function(err, connection) {
//   connection.query('SELECT * FROM production', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
//   });
// });

module.exports = pool;