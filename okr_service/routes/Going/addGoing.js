const {Target} = require("../../database/model/Target");
const {KeyResult} = require("../../database/model/KeyReslut");
module.exports = async (req, res) => {
    let addValue = req.query.addValue;
    const userId = req.decoded.userId;
    let createTargtAddValue = await Target.create({
        target_content: addValue,
        user_id: userId,
    });
    const connectOkrTargetsId = createTargtAddValue.id;

    console.log("connectOkrTargetsId", connectOkrTargetsId);

    const newAddKeyRes = req.query.keyRes;
    let createKeyAddValue = await KeyResult.create({
        key_result_content: newAddKeyRes,
        user_id: userId,
        connect_okr_targets_id: connectOkrTargetsId,
    });

    // if (!createKeyAddValue) {
    //   res.status(400).send({
    //     meta: {
    //       status: 400,
    //       msg: "添加失败",
    //     },
    //     data: null,
    //   });
    //   return;
    // }
    res.status(200).send({
        data: {createTargtAddValue, createKeyAddValue},
        meta: {
            status: 200,
            msg: "新增成功",
        },
    });
};
