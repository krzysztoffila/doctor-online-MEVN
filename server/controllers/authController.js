const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email
    });
    if (existingUser) {
      return res.status(400).json({
        error: 'Użytkownik o tym adresie email już istnieje.'
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      gender: req.body.gender,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      pesel: req.body.pesel,
      city: req.body.city,
    });

    await newUser.save();

    res.status(201).json({
      message: 'Użytkownik został pomyślnie zarejestrowany.'
    });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    res.status(500).json({
      error: 'Wystąpił błąd podczas rejestracji użytkownika.'
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });
    if (!user) {
      return res.status(401).json({
        error: 'Nieprawidłowy adres email lub hasło.'
      });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        error: 'Nieprawidłowy adres email lub hasło.'
      });
    }

    const token = jwt.sign({
      userId: user._id
    }, 'secretKey', {
      expiresIn: '1h'
    });

    res.status(200).json({
      message: 'Użytkownik pomyślnie zalogowany.',
      token: token,
    });
  } catch (error) {
    console.error('Błąd logowania:', error);
    res.status(500).json({
      error: 'Wystąpił błąd podczas logowania użytkownika.'
    });
  }
};
