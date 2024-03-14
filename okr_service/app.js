var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const isToken = require("./utils/isToken");

// 文件上传所用到的库
const fileUpload = require("express-fileupload");
var indexRouter = require("./routes/index");

// 引入 ejs 模板引擎
const ejs = require("ejs");

var app = express();
require("./database/init");
require("./database/model/User");

const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "uploads")));
app.use(
    fileUpload({
        createParentPath: true,
        // 当上传的文件需要保存到某个目录时，如果该目录不存在，fileUpload中间件会自动创建该目录，确保文件能够成功保存
    })
);
// 解析application/json类型的数据
app.use(bodyParser.json());

// 解析application/x-www-form-urlencoded类型的数据
app.use(bodyParser.urlencoded({extended: false}));

// 设置跨域和相应数据格式
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, mytoken");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    if (req.method == "OPTIONS") res.send(200);
    /*让options请求快速返回*/ else next();
});

app.use("/admin", isToken);
// app.use("/admin", (req, res, next) => {
//     // 判断是否是 注册接口 或 登陆接口 如果是 直接放行
//     if (req.url === "/login" || req.url === "/register") {
//         next();
//         // console.log(req.url);
//         return;
//     }
//     // 接收客户端传递过来的 token
//     const token = String(req.headers.authorization);
//     // 根据 客户端传递过来的 token 进行 解密，解密成功返回一个对象，解密失败直接返回 null

//     // 第一个参数是 token 第二个是 私钥 自己定义
//     const username = jwt.decode(token, "xiaoyucot");

//     // 判断客户端是否传递了token
//     if (token === "undefined" || username == null) {
//         res.status(400).send({
//             data: null,
//             meta: {
//                 username,
//                 msg: "token无效",
//                 status: 400,
//                 token,
//             },
//         });
//         return;
//     }
//     // token 正确 放行
//     next();
// });

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
