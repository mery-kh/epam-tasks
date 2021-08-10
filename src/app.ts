import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
const cron = require('node-cron');
const sendEmail = require('./utils/email');
// const userRouter = require('./routes/userRoutes');
dotenv.config();
export const PORT = process.env.PORT || 4000;
export const getApp = (): Express => {
    const app = express();
    app.disable('x-powered-by');
    app.use(express.json());
    // app.use('/api/v1/users/', userRouter);
    cron.schedule('*/5 * * * * ', async function () {
        await sendEmail();
    });
    return app;
};