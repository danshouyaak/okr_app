const {Target} = require("../../database/model/Target");
const {KeyResult} = require("../../database/model/KeyReslut");
module.exports = async (req, res) => {
    const userId = req.decoded.userId;
    const targetFindAllList = await KeyResult.findAll({
        where: {
            user_id: userId,
        },
        // attributes: ["key_result_content"],
        include: [
            {
                model: Target,
                attributes: ["target_content", "memo", "id", "user_id"],
            },
        ],
        // raw: true,
    });

    res.status(200).send(targetFindAllList);
};
