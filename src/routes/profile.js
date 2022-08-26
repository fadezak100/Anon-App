const router = require('express').Router();
const { getProfile } = require('../controllers');

router.get('/profile/:id', getProfile);

module.exports = router;
