const {UserInfo} = require('../../database/model/UserInfo')
module.exports = async (req, res) => {
    const userId = req.decoded.userId
    const findAllUserInfoList = await UserInfo.findAll({
        where: {
            id: userId
        }
    })
    res.status(200).send({
        meta: {
            status: 200,
            msg: "查询成功"
        },
        data: {
            findAllUserInfoList
        }
    })
}