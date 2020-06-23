const express = require('express');
const router = express.Router();
const { profileController } = require('../controller');
const { auth } = require('../helper/jwt');
const {
    getProfile,
    editProfile,
} = profileController;

router.get('/get-profile', getProfile);
router.patch('/edit-profile/:id', auth, editProfile);

module.exports = router;