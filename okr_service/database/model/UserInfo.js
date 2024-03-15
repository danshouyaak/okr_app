const {Sequelize, sequelize} = require("../init");

// 定义模型
const UserInfo = sequelize.define("okr_user_info", {
    // 名称
    nick_name: {
        type: Sequelize.STRING,
        allowNull: true,  // 名称可以不设置
        unique: false
    },
    profile_photo_url: {
        type: Sequelize.STRING,
        allowNull: true, // 头像允许不更换
        unique: false
    },
    user_account: {
        type: Sequelize.STRING,
        allowNull: false,  // 用户账号
        unique: true
    },
    user_id: {
        type: Sequelize.INTEGER,  //  用户id
        allowNull: false,
        unique: true
    }
})

UserInfo.sync().then(() => {
    console.log('同步模型成功');
})
module.exports = {UserInfo}