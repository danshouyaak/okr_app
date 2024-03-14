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

router.post("/admin/register", require("./User/register"));
router.post("/admin/login", require("./User/login"));
router.get("/admin/getUserList", require("./User/getUserList"));

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

module.exports = router;
