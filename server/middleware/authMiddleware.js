const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Brak tokena uwierzytelniającego.' });
        }

        const decodedToken = jwt.verify(token.split(' ')[1], process.env.JWT_PRIVATE_KEY);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Błąd uwierzytelniania.' });
    }
};
