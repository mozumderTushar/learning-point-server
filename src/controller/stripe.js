const Stripe = require('../models/stripe');
const jwt = require('jsonwebtoken');

exports.stripeInfo = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    subject,
    time,
    teacherId,
    teacherFirstName,
    teacherLastName,
    teacherContact,
    teacherEmail,
    reservedSubject
  } = req.body;
  const _user = new Stripe({
    firstName,
    lastName,
    email,
    subject,
    time,
    teacherId,
    teacherFirstName,
    teacherLastName,
    teacherContact,
    teacherEmail,
    reservedSubject
  });

  _user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Something is wrong'
      });
    }

    if (data) {
      return res.status(201).json({
        message: 'User created Successfully....!'
      })
    }
  });
}

exports.getStripe = (req, res) => {
  Stripe.find({})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};




