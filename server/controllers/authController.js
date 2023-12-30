const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleError = (res, error, errorMessage) => {
    console.error(errorMessage, error);
    return res.status(500).json({
        error: errorMessage,
    });
};

const generateToken = (userId) => {
    return jwt.sign({
        userId
    }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: "1h",
    });
};

exports.registerUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email,
        });
        if (existingUser) {
            return res.status(400).json({
                error: "Użytkownik o tym adresie email już istnieje.",
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
            message: "Użytkownik został pomyślnie zarejestrowany.",
        });
    } catch (error) {
        handleError(res, error, "Błąd rejestracji użytkownika:");
    }
};

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res
                .status(401)
                .json({
                    error: "Nieprawidłowy adres email lub hasło."
                });
        }

        const passwordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!passwordMatch) {
            return res
                .status(401)
                .json({
                    error: "Nieprawidłowy adres email lub hasło."
                });
        }

        const token = generateToken(user._id);

        // Ustawienie ciasteczka w odpowiedzi
        // res.cookie("token", token, {
        //     httpOnly: true,
        //     sameSite: "lax",
        //     maxAge: 60 * 60 * 1000,
        //     secure: process.env.NODE_ENV === "production", // Set to true in production
        // });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "development" ? "None" : "Lax",
            maxAge: 60 * 60 * 1000,
            secure: true,
        });

        res.status(200).json({
            message: "Użytkownik pomyślnie zalogowany.",
            data: {
                token,
                userId: user._id
            },
        });
    } catch (error) {
        handleError(res, error, "Błąd logowania użytkownika:");
    }
};

exports.logoutUser = async (req, res) => {
    try {
        if (!req.userData || !req.userData.userId) {
            return res.status(401).json({
                message: "Nieautoryzowany dostęp."
            });
        }
        res.clearCookie("token");

        // ... (dodaj dodatkową logikę, jeśli potrzebna)

        res.status(200).json({
            message: "[authController] - Użytkownik został wylogowany pomyślnie.",
        });
    } catch (error) {
        handleError(res, error, "Błąd podczas wylogowywania użytkownika:");
    }
};
