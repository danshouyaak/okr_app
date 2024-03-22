const {Target} = require("../../database/model/Target");
module.exports = async (req, res) => {
    let addValue = req.query.addValue;
    const userId = req.decoded.userId;
    let createAddValue = await Target.create({
        target_content: addValue,
        user_id: userId,
    });
    //   const connectOkrTargetsId = createAddValue.id;
    //   console.log("connectOkrTargetsId", connectOkrTargetsId);
    res.status(200).send({
        data: createAddValue,
        meta: {
            status: 200,
            msg: "新增成功",
        },
    });
};
