const { Usuario } = require('../db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {   
        user: 'henrylatcom@gmail.com', 
        pass: 'osmtyqgalgnegpss',
        },
});

transporter.verify((error, success) => {
    if (error) {
        console.log("no se pudo conectar con el servidor de gmail");
    } else {
        console.log('Server is ready to take our messages');
    }
});

async function getLogin (req, res) {
    const { username, password } = req.body;
    const user = await Usuario.findOne({
        where: {username,password}});
    if (!user){
        res.status(404).send('Usuario no encontrado');
    } else {
        jwt.sign({user}), 'secretkey', (err, token) => {
            res.json({
                token
            })
        }
    }
}



 function getRegister (req, res) {
        Usuario.create({
            username: req.body.username,
            email: req.body.email,
            password: password,
            // token: token,
        })
        .then(user => {
            let mailOptions = {
                from: 'henrylatcom@gmail.com',
                to: user.email,
                subject: 'Bienvenido a la aplicacion',
                text: 'Hola ' + user.username + '! Gracias por registrarte en nuestra aplicacion. Para activar tu cuenta, por favor ingresa a la siguiente direccion: http://localhost:3000/api/users/activate/' + user.token,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.json(user);
        })
        .catch(err => {
            res.status(400).send('Error: ' + err);
        });
    }





module.exports = {
    getLogin,
    getRegister
}