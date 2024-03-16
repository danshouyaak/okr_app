module.exports = async (req, res) => {
    // 上传头像
    console.log(req.files);
    try {
        if (!req.files) {
            res.status(403).send({
                meta: {
                    status: 403,
                    msg: "文件文件上传失败",
                },
            });
        } else {
            // 获取文件对象
            const preview = req.files.preview;
            //   console.log(req.files.preview);
            // preview.mv('./uploads/'+preview.name)
            preview.mv("./uploads/" + preview.name);
            let pictureUrl = "http://localhost:3000/" + preview.name;
            res.status(200).send({
                meta: {
                    status: 200,
                    msg: "上传成功",
                },
                data: {
                    name: preview.name,
                    mimetype: preview.mimetype,
                    size: preview.size,
                    url: pictureUrl,
                },
            });
        }
    } catch {
        res.status(500).send({
            meta: {
                status: 500,
                msg: "出错了",
            },
        });
    }
};
