const {Sequelize, sequelize} = require("../init")

// 定义模型
const KeyResult = sequelize.define("okr_key_result", {
    key_result_content: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false // 表示该字段的值必须是唯一的，不能有重复
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    }
})
KeyResult.sync().then(() => {
    console.log("同步模型成功");
})
module.exports = {KeyResult}