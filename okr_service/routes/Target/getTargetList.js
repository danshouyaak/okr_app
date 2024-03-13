const {Target} = require("../../database/model/Target");
module.exports = async (req, res) => {
    const userId = (req.decoded.userId);
    const findAllTargetList = await Target.findAll({
        where: {
            user_id: userId,
        },
    });
    // console.log(findAllTargetList);
    res.status(200).send({
        data: findAllTargetList,
        meta: {
            status: 200,
            msg: "查询成功",
        },
    });
};
