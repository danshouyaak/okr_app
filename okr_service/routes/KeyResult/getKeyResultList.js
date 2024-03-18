const {KeyResult} = require("../../database/model/KeyReslut");
module.exports = async (req, res) => {
    // console.log(req.decoded);
    const userId = req.decoded.userId;
    // console.log(userId);
    const findAllKeyResult = await KeyResult.findAll({
        where: {
            user_id: userId,
        },
    });
    res.status(200).send({
        meta: {status: 200, msg: "操作成功"},
        data: findAllKeyResult,
    });
};
