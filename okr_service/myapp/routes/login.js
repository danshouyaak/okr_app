const express = require("express");
var route = express.Router();
const querystring = require("querystring");
// const url = require("url");
const pool = require("../Api/mysql/sql");

route.post("/login", (req, res) => {
    let postVal = "";
    let formVal = "";
    formVal = querystring.parse(postVal);
    let userName = req.body.username;
    let userPwd = req.body.password;
    // console.log(userName);

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
            console.log(req.body);
            res.send(apiRes);
        });
    });
});

module.exports = route;
