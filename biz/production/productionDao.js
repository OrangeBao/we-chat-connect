/**
 * Created by baoyinghai on 7/26/17.
 */
const pool = require('../../cache/mysql');
module.exports = {
  queryAllByPage: function(currentPage, pageSize) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query('SELECT * FROM production limit ?,?', [currentPage * pageSize, pageSize], function (error, data, fields) {
            if (error) {
              connection.release();
              reject(error);
            } else {
              connection.query('SELECT count(*) as total FROM production', function(error, count, fields) {
                connection.release();
                if (error) {
                  reject(error);
                } else {
                  resolve({
                    data: data,
                    count: count[0].total
                  });
                }
              });

            }
          });
        }
      });
    });
  },
  queryAll: function() {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query('SELECT * FROM production', function (error, results, fields) {
            connection.release();
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },
  modifyProduction: function(production) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query('UPDATE production set title = ?, month_sell = ?, price = ?, img_id = ? where production_id = ?', [production.title, production.monthSell,  production.price, production.imgId, production.productionId], function(error, result, fields) {
            connection.release();
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        }
      });
    });
  },
  addProduction: function(production) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query('INSERT INTO production set ?',
            {
              title: production.title,
              month_sell:  production.monthSell,
              price: production.price,
              img_id: production.imgId
            }, function(error, result, fields) {
            connection.release();
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        }
      });
    });
  },
  deleteProduction: function(productionId) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query('DELETE FROM production where production_id = ?', [productionId], function(error, result, fields) {
            connection.release();
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        }
      });
    });
  }
};