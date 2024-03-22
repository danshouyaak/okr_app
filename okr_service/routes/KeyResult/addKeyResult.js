const {KeyResult} = require("../../database/model/KeyReslut");
module.exports = async (req, res) => {
    const userId = req.decoded.userId;
    const newAddKeyRes = req.query.keyRes;
    let createAddValue = await KeyResult.create({
        key_result_content: newAddKeyRes,
        user_id: userId,
    });

    if (!createAddValue) {
        res.status(400).send({
            meta: {
                status: 400,
                msg: "添加失败",
            },
            data: null,
        });
        return;
    }

    res.status(200).send("Ok");
};
