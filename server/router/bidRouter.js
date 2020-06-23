const express = require('express');
const router = express.Router();
const { bidController } = require('../controller');
const {
    getBid,
} = bidController;

router.get('/view-auction', getBid);

module.exports = router;