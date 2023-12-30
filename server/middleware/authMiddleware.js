const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // const token = req.cookies.token || localStorage.getItem('token');
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: 'Brak tokena uwierzytelniającego.',
            });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.userData = {
            userId: decodedToken.userId,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Błąd uwierzytelniania.',
        });
    }
};
