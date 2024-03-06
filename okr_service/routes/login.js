const express = require("express");
var route = express.Router();
const querystring = require("querystring");
// const url = require("url");
const pool = require("../Api/mysql/sql");

// 查询所有用户信息
// route.get("/", (req, res) => {
//   let sql = "select * from okr_user";
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     connection.query(sql, (err, result, fields) => {
//       connection.release();
//       if (err) throw err;
//       let ApiRes = {
//         code: 200,
//         msg: "成功",
//         data: result,
//       };
//       res.send(ApiRes).status(200);
//     });
//   });
// });

// // 用户登录
// route.post("/login", (req, res) => {
//   res.send("OK");
// });

// // 用户注册
// route.post("/register",(req,res)=>{
//   res.send("register")
// })
module.exports = route;
