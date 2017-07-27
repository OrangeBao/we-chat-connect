/**
 * Created by baoyinghai on 7/27/17.
 */
const pool = require('../../cache/mysql');
module.exports = {
  queryAddressById: function(openId) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query('SELECT b.address_id, b.address, b.name, b.sex, b.phone FROM u_a_relative a inner join address b on a.address_id = b.address_id where open_id = ?' , [openId], function (error, results, fields) {
          if (error) reject(error);
          resolve(results);
        });
      });
    });
  },
  updateAddressById: function(addressId, address, name, sex, phone) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query('update address set address = ?, name = ?, sex = ?, phone = ? where address_id = ?',[ address, name, sex, phone, addressId ], function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    });
  },
  insertAddress: function(openId, address, name, sex, phone) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.beginTransaction(function(err){
          if (err) throw err;
          connection.query('insert into address set address = ?, name = ?, sex = ?, phone = ?', [ address, name, sex, phone ], function (error, results, fields) {
            if (error) {
              connection.rollback(function() {
                reject(error)
              });
            } else {
              connection.query('insert into u_a_relative set open_id = ?, address_id = ?', [openId, results.insertId], function(error, results, fields) {
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