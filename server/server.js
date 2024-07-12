// Package imports
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

// Local imports
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from './database/mongoDBconnect.js';
import { app, server } from './socket/socket.js';

const __dirname = path.resolve();

dotenv.config()

// Environmental variables
const PORT = process.env.PORT || 5000;

// Initialize middleware

app.use(cookieParser())
app.use(express.json());
app.use(cors({ origin: true }));
app.use(urlencoded({ extended: true }));
  

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)


    // Set static folder
    app.use(express.static(path.join(__dirname, '/client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    }
    )



//Set port for the server
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server active... Running on port ${PORT} ...`)
})