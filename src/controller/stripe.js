const Stripe = require('../models/stripe');
const jwt = require('jsonwebtoken');

exports.stripeInfo = (req, res) => {


      const {
        firstName,
        lastName,
        email,
        subject,
        time,
      } = req.body;
      const _user = new Stripe({
        firstName,
        lastName,
        email,
        subject,
        time,
      });

      _user.save((err, data) => {
        if (err) {
 
          console.log(err);
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




