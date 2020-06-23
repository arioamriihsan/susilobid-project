const { dba } = require('../database');

module.exports = {
    getBid: async (req,res) => {
        let sql = `select * from bid`;
        let countSql = `select count(*) as numRows from bid`;
        try {
            let count = await dba(sql);
            let response = await dba(sql);
            res.status(200).send({
                data: response,
                count: count[0].numRows,
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
};