const {UserInfo} = require('../../database/model/UserInfo')
module.exports = async (req, res) => {
    const findAllUserInfoList = await UserInfo.findAll()
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