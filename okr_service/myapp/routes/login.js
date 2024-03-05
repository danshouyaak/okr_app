const express = require("express");
var route = express.Router();
const querystring = require("querystring");
// const url = require("url");
const pool = require("../Api/mysql/sql");
const bodyParser = require('body-parser');


route.post("/login", (req, res) => {
    let sql = "";
    let postVal = "";
    req.on("data", (chunk) => {
        postVal += chunk;
    });
    let formVal = "";
    req.on("end", () => {
        // 解析post请求中的参数
        formVal = querystring.parse(postVal);
        let userName = formVal.username;
        let userPwd = formVal.password;
        pool.getConnection((err, connection) => {
            if (err) {
                throw err;
            }
            connection.query(`select * from okr_user`, (err, result) => {
                if (err) throw err;
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
});

route.post("/editData", (req, res) => {
    let postVal = "";

    let formVal = "";
    formVal = querystring.parse(postVal);
    let userName = req.body.username;
    let userPwd = req.body.password;
    console.log(userName);

    let sql = `select * from okr_user where password=${userPwd}`;
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }
        connection.query(sql, function (err, result) {
            if (err) throw err;
            connection.release();
            let apiRes = {
                code: 200,
                msg: "成功",
                data: result,
            };
            console.log("==============");
            res.send(apiRes);
        });
    });
});

module.exports = route;
