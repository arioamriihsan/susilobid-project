const { db } = require('../database');
const Crypto = require('crypto');

module.exports = {
    getProfile: (req,res) => {
        let sql = `SELECT user_id, address, phone FROM users`;
        db.query(sql, (err,results) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send({
                status: 'Success',
                data: results[0],
                message: 'Fetched Successfully',
            });
        });
    },
    editProfile: (req,res) => {
        let { id } = req.params;
        let { address, phone, password } = req.body;
        let hashPassword = Crypto.createHmac('sha256', 'kuncirahasia').update(password).digest('hex');
        let sql = `UPDATE users SET address = '${address}', phone = ${phone}, password = '${hashPassword}' WHERE user_id = ${id}`;
        db.query(sql, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            let get = `SELECT address, phone, password FROM users WHERE user_id = ${id}`;
            db.query(get, (err,results) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                res.status(200).send({
                    status: 'Success',
                    data: results[0],
                    message: 'Edit Success',
                });
            });
        });
    },
};