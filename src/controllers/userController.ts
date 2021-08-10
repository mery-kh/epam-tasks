import express, {Express, Response, Request} from 'express';
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const cron = require('node-cron')

exports.sendEmail = async (req: Request, res: Response) => {
    try {
       await cron.schedule('* * * * *',async function() {
            await sendEmail({
                email: req.body.email,
                subject: req.body.subject,
                message: req.body.message
            });
        });
        res.status(200).json({
            status: 'success',
            message: 'Message sent!!!'
        })
    }
    catch (err){
        return new AppError('There was an error sending the email. Try again later!',500);
    }
}