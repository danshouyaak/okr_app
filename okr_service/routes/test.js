const express = require("express");
const querystring = require("querystring");
var route = express.Router();
// 引入node-xlsx包
// const xlsx = require("node-xlsx");
// 引入连接池
const pool = require("../Api/mysql/sql");

route.get("/ts", (req, res) => {
    let sql = "select * from t_okr";
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(sql, function (err, result, fields) {
            connection.release();
            let apiRes = {
                code: 200,
                msg: "成功",
                data: result,
            };
            console.log(querystring.parse(req));
            res.send(apiRes);
        });
    });
});
module.exports = route;
