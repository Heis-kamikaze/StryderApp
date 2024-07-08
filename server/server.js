// Package imports
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Local imports
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from './database/mongoDBconnect.js';

dotenv.config()

// Environmental variables
const PORT = process.env.PORT;

// Initialize middleware
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({ origin: true }));
app.use(urlencoded({ extended: true }));
  
app.get('/', (req, res) => {
    res.send(`Welcome to Stryder`)
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)


//Set port for the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server active... Running on port ${PORT} ...`)
})