const jwt = require('jsonwebtoken');

const generateToken = (usuario_id = '') => {
    return new Promise((resolve, reject) => {
        const payload = { usuario_id };
        jwt.sign(payload, {
            expiresIn: '1d',
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = {
    generateToken,
};