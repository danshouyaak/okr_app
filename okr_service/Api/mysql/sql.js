// 引入mysql
// const mysql = require("mysql");

// // 数据库连接池的配置
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "okr",
//   charset: "UTF8",
//   connectionLimit: 50, //允许连接数
//   multipleStatements: true, //是否允许执行多条sql语句
//   timezone: "08:00", //大坑，必须加这一句，否则时间不对劲
// });

// const User = mysql.module(
//   "User",
//   new mysql.Schema({
//     username: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//   })
// );

// module.exports = pool;
