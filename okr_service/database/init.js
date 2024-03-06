const Sequelize = require("sequelize");

const sequelize = new Sequelize("okr", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    port: "3306",
});

// 连接数据库
sequelize
    // 发送连接
    .authenticate()
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch((err) => {
        console.error("连接失败！" + "错误信息" + err);
    });

module.exports = {Sequelize, sequelize}
