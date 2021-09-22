const express = require('express');
const { student_signup, signin } = require('../controller/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/student-signup', validateSignupRequest, isRequestValidated, student_signup);


module.exports = router;