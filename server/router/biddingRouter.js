const express = require('express');
const router = express.Router();
const { biddingController } = require('../controller');
const {
  biddingPost,
  getBidding
} = biddingController;

router.get('/get/:productId/:limit/:offset', getBidding);
router.post('/post/:productId/:bidder/:offer/:limit/:offset', biddingPost);

module.exports = router;