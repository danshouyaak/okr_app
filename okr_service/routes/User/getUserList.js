const {User} = require("../../database/model/User");
module.exports = async (req, res) => {
    const findAllUserList = await User.findAll();
    res.status(200).send({
        data: findAllUserList,
        meta: {
            status: 200,
            msg: "查询成功",
        },
    });
};
