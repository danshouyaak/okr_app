var express = require("express");
var router = express.Router();
// const multer = require('multer')
// const upload = multer({ dest: '../../public/uploads' })
/* GET home page. */
router.get("/index", function (req, res, next) {
    res.status(404).send({
        data: null,
        meta: {
            msg: "Not Found",
            status: 404,
        },
    });
});
// 用户注册
router.post("/admin/register", require("./User/register"));
// 用户登录
router.post("/admin/login", require("./User/login"));
router.get("/admin/getUserList", require("./User/getUserList"));
// 获取目标列表
router.get("/admin/Target/getTargetList", require("./Target/getTargetList"));
router.get("/admin/Target/addTarget", require("./Target/addTarget"));
// 根据id进行删除
router.delete(
    "/admin/Target/deleteTarget/:id",
    require("./Target/deleteTarget")
);

// 文件上传
router.put(
    "/admin/file/Upload",
    require("./ProfilePicture/ProfilePictureUpload")
);

// 获取用户登录信息
router.get(
    "/admin/UserInfo/getUserInfoList",
    require("./UserInfo/getUserInfoList")
);

// 获取关键结果列表
router.get(
    "/admin/KeyResult/getKeyResultList",
    require("./KeyResult/getKeyResultList")
);
// 添加关键结果
router.post(
    "/admin/KeyResult/addKeyResult",
    require("./KeyResult/addKeyResult")
);
// 根据id删除关键结果
router.delete(
    "/admin/KeyResult/deteleKeyRes/:id",
    require("./KeyResult/deteleKeyRes")
);
module.exports = router;
