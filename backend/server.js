import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;  

app.use(cors())
app.use(express.json()); 

app.listen(PORT, () => {
    connectDB();
    console.log ("server started at http://localhost:", + PORT +  " hello, nodemon works fine, proud of myself.");
});