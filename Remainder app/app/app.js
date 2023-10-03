// importing dependencies
import express from "express";
import mongoose from "mongoose";
import models from './models/index.js';
import cors from 'cors';
import route from './routes/index.js';

const app = express();
// using dependencies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

route(app);


// connecting to mongodb
mongoose.connect('mongodb://127.0.0.1/reminderapidb');
export default app;