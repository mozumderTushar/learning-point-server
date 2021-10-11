const express = require('express');
const { stripeInfo } = require('../controller/stripe');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/stripe',  stripeInfo);

module.exports = router;