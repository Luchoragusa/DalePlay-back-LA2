const nodemailer = require('nodemailer');
const jwt = require('jwt-simple');

const sendConfirmationEmail = async (user) => {
    try{

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        var token = jwt.encode(user.email, process.env.HASH_KEY);
        const url = `${process.env.URL}/users/confirm/${token}`;

        console.log("aca tamooo!");

        let mailOptions = {
            from: 'Dale Play <',
            to: user.email,
            subject: 'Confirmación de cuenta',
            html: `
                <h1>¡Bienvenido a la tienda <span style="color: #1e90ff;">Dale-Play</span>!</h1>
                <p>Para confirmar tu cuenta, haz click en el siguiente enlace:</p>
                <a href="${url}">Confirmar cuenta</a>
            `
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendConfirmationEmail
};