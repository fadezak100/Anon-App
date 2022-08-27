const router = require('express').Router();
const { getProfile } = require('../controllers');

router.get('/profile', getProfile);

module.exports = router;
