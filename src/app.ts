import {Express, Response, Request} from 'express';
import express from 'express';
import dotenv from 'dotenv';
const blogRoutes = require('./routes/blog.routes');
const rwRoutes = require('./routes/read-write.routes');
dotenv.config();
export const PORT = process.env.PORT || 4000;
export const getApp = (): Express => {
    const app = express();
    app.use(express.json());
    app.use('/api/v1/blogs/', blogRoutes);
    app.use('/api/v1/read-write/', rwRoutes)
    return app;
};