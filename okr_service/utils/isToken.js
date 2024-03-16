var createError = require("http-errors");
var jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    if (req.url === "/login" || req.url === "/register") {
        next();
        // console.log(req.url);
        return;
    }

    // 拿取token 数据 按照自己传递方式写

    const token = String(req.headers.authorization);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indhbmd3dTEyIiwiaWF0IjoxNzEwMzEyNTM1fQ.4vG0MgdFwPgMRt_hoyDW1WeXdxj7LXunHPym1vUW-jo'

    if (token) {
        // 解码 token (验证 secret 和检查有效期（exp）)
        jwt.verify(token, "xiaoyucot", function (err, decoded) {
            if (err) {
                return res.status(401).send({
                    msg: "token无效",
                    status: 401,
                    // data: err,
                });
            } else {
                // 如果验证通过，在req中写入解密结果
                // console.log(decoded); //{ userId: 31, iat: 1574244315, exp: 1574330715 }
                req.decoded = decoded;
                // console.log('------',decoded);
                next();
            }
        });
    } else {
        return res.status(403).send({
            msg: "token无效",
            status: 403,
        });
    }
};
