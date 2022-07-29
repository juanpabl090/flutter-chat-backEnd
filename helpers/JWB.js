const jwb = require('jsonwebtoken');

const generarJWB = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwb.sign(payload, process.env.JWT_KEY, {
            expiresIn: '48h',
        }, (err, token) => {
            if (err) {
                // NO SE PUDO CREAR EL TOKEN
                reject('no se pudo generar el JWT');
            } else {
                // TOKEN:
                resolve(token);
            }
        })
    })

}

module.exports = {
    generarJWB
}