const express = require('express');
const { stripeInfo, getStripe } = require('../controller/stripe');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/stripe',  stripeInfo);
router.get('/stripe-info',  getStripe);

module.exports = router;