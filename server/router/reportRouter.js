const express = require('express');
const router = express.Router();
const { reportController } = require('../controller');
const {
    Revenue,
    MostBidder,
    PopularCategory,
    ProductSell,
    WeeklyBid
} = reportController;

router.get('/get-revenue/:month', Revenue);
router.get('/most-bidder/:month', MostBidder);
router.get('/popular-ctg/:month', PopularCategory);
router.get('/total-sell/:month', ProductSell);
router.get('/weekly-bid/:month', WeeklyBid);

module.exports = router;