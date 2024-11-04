const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "joaopauloclementesilva@gmail.com",
        pass: "jtdngwqwimvkivrr", // Replace with your actual password or use an app password
    },
    tls: {
        rejectUnauthorized: false,
    },
});

let options = {
    from: "joaopauloclementesilva@gmail.com",
    to: "clementejp598@gmail.com",
    subject: "Meu primeiro email utilizando o node",
    text: " Olá, caro cliente. ",
};

const sendEmail = async () => {
    try {
        console.log("enviando E-mail");
        await transporter.sendMail(options); // Corrected method name from sendEmail to sendMail
        console.log("E-mail enviado!");
        process.exit();
    } catch (error) {
        console.log("deu erro =(");
        console.log(error);
    }
};

sendEmail();