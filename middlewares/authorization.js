const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
    try {
        const token = req.headers['token'];
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

        //console.log(decoded)

        if (req.user.role == 'employee') {
            next();
        } 
        else if (req.user.role == 'customer') {
            res.status(401).json({
                message: 'Maaf customer tidak bisa merubah data, silahkan hubungi employee perpustakaan'
            });

        }

    } catch (err) {
        res.status(401).json({
            message: 'User Not Authorized'
        });
    }
}

module.exports = authorization;