const jwt = require("jsonwebtoken");
const md5 = require("../../utils/md5");
const {User} = require("../../database/model/User");

module.exports = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    const md5Password = md5(password);

    password = md5Password;

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
    // 登陆成功生成 token 返回给客户端 第一个参数 是 组 ，第二个是 私钥（自定义）
    // const token = jwt.sign({ username }, "xiaoyucot", {
    //   expiresIn: 60 * 60 * 2, // 有效授权2小时
    // });

    // res.status(200).send({
    //   meta: {
    //     msg: "登陆成功!",
    //     status: 200,
    //   },
    //   data: {
    //     username: findUser.username,
    //     id:findUser.id,
    //     token,
    //   },
    // });

    // ///////

    const token = jwt.sign({userId: findUser.id}, "xiaoyucot", {
        expiresIn: 60 * 60 * 2, // 授权时效2小时
    });
    jwt.verify(token, "xiaoyucot", function (err, decode) {
        let accessToken = decode;
        accessToken.id = findUser.id;
        accessToken.name = findUser.username;
        accessToken.token = token;
        res.send({
            status: "sucess",
            data: [accessToken],
        });
    });
};
