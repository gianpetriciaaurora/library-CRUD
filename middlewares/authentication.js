const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
    try {
        const token = req.headers['token'];
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.token = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: 'Token is Invalid'
        });
    }
}

module.exports=authentication;