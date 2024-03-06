const {Sequelize, sequelize} = require("../init");

// 定义模型
const User = sequelize.define("okr_user", {
    // 一个对象就是字段
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true// 约束不能为空格
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // 约束不能为空格
    },
});

// 同步模型
User.sync().then(() => {
    console.log('同步模型成功');
})

module.exports = {User};
