const {Sequelize, sequelize} = require("../init");

// 定义模型
const Target = sequelize.define("okr_targets", {
    target_content: {
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 不允许为空
        unique: false, // 约束不能为空格
    },
    user_id: {
        type: Sequelize.INTEGER, // integet
        allowNull: false,
        unique: false,
        field: "user_id",
    },
});

// 新建数数据库字段 connect_keyResult_id
// sequelize.queryInterface.addColumn("okr_targets", "connect_keyResult_id", {
//   type: Sequelize.INTEGER,
//   allowNull: true,
//   unique: false,
// });
Target.sync().then(() => {
    console.log("同步模型成功");
});
module.exports = {Target};
