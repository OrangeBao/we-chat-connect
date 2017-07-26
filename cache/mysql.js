var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : 3306,
  user            : 'root',
  // password        : 'secret',
  database        : 'yoghourt'
});


// pool.getConnection(function(err, connection) {
//   connection.query('SELECT * FROM production', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
//   });
// });

module.exports = pool;