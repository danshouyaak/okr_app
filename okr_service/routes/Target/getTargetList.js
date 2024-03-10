const {Target} = require("../../database/model/Target");
module.exports = async (req, res) => {
    const findAllTargetList = await Target.findAll();
    // console.log(findAllTargetList);
    res.status(200).send({
        data: findAllTargetList,
        meta: {
            status: 200,
            msg: "查询成功",
        },
    });
};
