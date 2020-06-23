const express = require('express');
const router = express.Router();
const { cartController } = require('../controller');
const {
    getCart,
} = cartController;

router.get('/get-cart/:id', getCart);

module.exports = router;