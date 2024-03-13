const {Target} = require("../../database/model/Target");
const {User} = require("../../database/model/User");
module.exports = async (req, res) => {
    console.log(req.decoded);
    const findAllTargetList = await Target.findAll();
    res.status(200).send({
        data: findAllTargetList,
        meta: {
            status: 200,
            msg: "查询成功",
        },
    });
};
