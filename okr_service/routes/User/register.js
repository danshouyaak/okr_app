const {User} = require("../../database/model/User");
module.exports = async (req, res) => {
    const {username, password} = req.body;

    // 根据客户端传递过来的用户名 查询数据库中是否存在这个用户名
    // 查询是否唯一
    const model = await User.findOne({where: {username}});

    if (model) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "用户已存在",
                status: 400,
            },
        });
        return;
    }
    //   创建用户
    const createUser = await User.create({username, password});
    res.status(201).send({
        meta: {
            msg: "用户创建成功",
            status: 201,
        },
        data: {
            createUser,
        },
    });
};
