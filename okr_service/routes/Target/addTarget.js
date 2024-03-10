const {Target} = require("../../database/model/Target");
module.exports = async (req, res) => {
    let addValue = req.query.addValue;
    // console.log(addValue1);
//   let addValue2 = req;
    // res.status(200).send({addValue});
    let createAddValue = await Target.create({
        target_content: addValue,
    });
    console.log(addValue);
    res.status(200).send({
        data: createAddValue,
        meta: {
            status: 200,
            msg: "新增成功",
        },
    });
};
