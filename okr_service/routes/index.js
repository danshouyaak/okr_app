var express = require("express");
var router = express.Router();

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

module.exports = router;
