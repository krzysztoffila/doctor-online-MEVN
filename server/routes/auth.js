const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController')

router.post('/register', async (req, res) => {
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
});
router.post('/login', authController.loginUser);
router.post('/logout', authMiddleware, authController.logoutUser);

module.exports = router;
