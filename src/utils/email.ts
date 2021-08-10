const nodemailer = require('nodemailer');
export {};
const sendEmail = async (options: { email: any; subject: any; message: any; }): Promise<void> => {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
    });
    // 2) Define the email
    const mailOptions = {
        from: "example@example.com",
        to: 'merykhachikyan74@gmail.com',
        subject: 'asd',
        text: 'asd',
    }
    // 3) Actually send the email
    await transporter.sendMail(mailOptions)
};
module.exports = sendEmail;
