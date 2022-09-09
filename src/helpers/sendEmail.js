const nodemailer = require('nodemailer');
const jwt = require('jwt-simple');

const sendConfirmationEmail = async (user) => {
    try{

        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        var token = jwt.encode(user.email, process.env.HASH_KEY);
        const url = `${process.env.URL}/users/confirm/${token}`;

        await transporter.sendMail({
            from: {
                name: 'Dale play',
                address: process.env.EMAIL
            },
            to: user.email,
            subject: 'Confirmación de cuenta',
            html: `
                <h1>¡Bienvenido a la tienda <span style="color: #1e90ff;">Dale-Play</span>!</h1>
                <p>Para confirmar tu cuenta, haz click en el siguiente enlace:</p>
                <a href="${url}">Confirmar cuenta</a>
            `
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendConfirmationEmail
};