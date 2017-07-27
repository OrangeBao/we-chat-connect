module.exports = {
  token: 'weixinCourse',
  appId: 'wx18f61c53a6240c2f',
  appSecret: '9db20e88660581e51a65158227c24e0f',
  mysqlOption: {
    connectionLimit : 10,
    host            : 'localhost',
    port            : 3306,
    user            : 'root',
    password        : process.argv[2] ? undefined : 'Wang20088',
    database        : 'yoghourt'
  }
}