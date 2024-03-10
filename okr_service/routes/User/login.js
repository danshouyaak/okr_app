const jwt = require("jsonwebtoken");
const {User} = require("../../database/model/User");
module.exports = async (req, res) => {
    const {username, password} = req.body;
    const findUser = await User.findOne({where: {username}});
    if (!findUser) {
        res.status(400).send({
            meta: {
                msg: "用户名不存在",
                status: 400,
            },
            data: null,
        });
        return;
    }

    //   判断账号密码是否正确
    if (username !== findUser.username || password !== findUser.password) {
        res.status(400).send({
            meta: {
                msg: "账号或密码不正确",
                status: 400,
            },
            data: null,
        });
        return;
    }

    // 登录成功 创建token 返回给客户端
    // // 登陆成功生成 token 返回给客户端 第一个参数 是 组 ，第二个是 私钥（自定义）
    const token = jwt.sign({username}, "xiaoyucot");

    res.status(200).send({
        meta: {
            msg: "登陆成功!",
            status: 200,
        },
        data: {
            username: findUser.username,
            token,
        },
    });
};
