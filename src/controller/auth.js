const User = require('../models/student');
const jwt = require('jsonwebtoken');

exports.student_signup = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((err, user) => {
      if (user) return res.status(400).json({
        message: 'User already exists'
      });

      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString()
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
    });
}

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }) 
  .exec((err, user) => {
    if(err) {
      return res.status(400).json({ err })
    }
    if(user) {
      if(user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'});
        const { firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            firstName, lastName, email, role, fullName
          }
        })
      }else{
        return res.status(400).json({
          message: 'Invalid Password'
        })
      }
    }
    else {
      return res.status(400).json({
        message: 'Something went wrong'
      })
    }
  })
}
