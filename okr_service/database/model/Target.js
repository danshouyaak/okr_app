const {Sequelize, sequelize} = require("../init");

// 定义模型
const Target = sequelize.define("okr_target", {
    target_content: {
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 不允许为空
        unique: true, // 约束不能为空格
    },
});
module.exports = {Target};
