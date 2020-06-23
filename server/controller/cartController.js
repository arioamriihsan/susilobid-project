const { db } = require('../database');

module.exports = {
    getCart: (req,res) => {
        let { id } = req.params;
        let sql = `SELECT * FROM cart WHERE user_id = ${id}`;
        db.query(sql, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send({
                status: 'Success',
                data: results,
                message: 'Cart successfully fetched',
            });
        });
    },
};