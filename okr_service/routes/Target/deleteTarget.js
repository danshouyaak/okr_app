const {Target} = require("../../database/model/Target");
module.exports = async (req, res) => {
    let deleteId = req.params.id;
    const deleteTarget = await Target.destroy({
        where: {
            id: deleteId,
        },
    });
    // console.log(deleteTarget);
    if (deleteTarget > 0) {
        res.status(200).send({
            data: deleteTarget,
            meta: {
                status: 200,
                msg: "删除成功",
            },
        });
    }
};
