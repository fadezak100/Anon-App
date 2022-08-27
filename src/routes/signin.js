const router = require('express').Router();
const { getSignIn } = require('../controllers');

router.get('/sign-in', getSignIn);

module.exports = router;
