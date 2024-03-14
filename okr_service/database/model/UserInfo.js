const {Sequelize, sequelize} = require("../init");

// 定义模型
const UserInfo = sequelize.define("okr_user_info", {
    // 名称
    nick_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    }
})