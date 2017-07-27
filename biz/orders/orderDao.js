/**
 * Created by baoyinghai on 7/27/17.
 */
const pool = require('../../cache/mysql');
module.exports = {
  queryOrdersById: function(openId) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query('SELECT b.order_id, b.address_id, b.desc, b.count, b.money, b.statue, b.create_time, c.address, c.name, c.sex, c.phone FROM u_o_relative a inner join yoghourt.order b on a.order_id = b.order_id inner join address c on c.address_id = b.address_id where open_id = ?', [openId], function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    });
  },
  updateOrderById: function(orderId, statue) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query('update yoghourt.order set statue = ? where order_id = ?', [statue, orderId], function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    });
  },
  insertOrder: function(openId, desc, count, money, statue, addressId) {
    //create_time
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.beginTransaction(function(err) {
          if (err) throw err;
          connection.query('insert into yoghourt.order set ?',
            { desc: desc, count: parseInt(count), money: parseFloat(money), statue: parseInt(statue), address_id: parseInt(addressId), create_time: new Date()}, function (error, results, fields) {
              if (error) {
                connection.rollback(function() {
                  reject(error)
                });
              } else {
                connection.query('insert into u_o_relative set open_id = ?, order_id = ?', [openId, results.insertId], function(error, results, fields) {
                  if (error) {
                    connection.rollback(function() {
                      reject(error)
                    });
                  } else {
                    connection.commit(function(err) {
                      if (err) {
                        return connection.rollback(function() {
                          reject(err);
                        });
                      } else {
                        resolve();
                      }
                    });
                  }
                });
              }

          });


        });
      });
    });
  }
};