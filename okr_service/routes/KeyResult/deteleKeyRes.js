const {KeyResult} = require("../../database/model/KeyReslut");
module.exports = async (req, res) => {
    const deleteId = req.params.id;
    const deleteRes = await KeyResult.destroy({
        where: {
            id: deleteId,
        },
    });
    if (deleteRes > 0) {
        res.status(200).send({
            meta: {
                status: 200,
                msg: "删除成功",
            },
            data: null,
        });
        return;
    }
    res.status(403).send({
        meta: {
            status: 403,
            msg: "删除失败",
        },
        data: null,
    });
};
