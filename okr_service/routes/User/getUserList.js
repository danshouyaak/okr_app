const pool = require('../../Api/mysql/sql')
module.exports = (req, res) => {
    let sql = "select * from okr_user";
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sql, (err, result, fields) => {
            connection.release();
            if (err) throw err;
            let ApiRes = {
                code: 200,
                msg: "成功",
                data: result,
            };
            res.send(ApiRes).status(200);
        });
    });
};
