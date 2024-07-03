// Package imports
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

// Local imports
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from './database/mongoDBconnect.js';

// Environmental variables
const PORT = process.env.PORT || 3000;
config()

// Initialize middleware
const app = express();
app.use(json());
app.use(cors({ origin: true }));
app.use(urlencoded({ extended: true }));
  
app.get('/', (req, res) => {
    res.send(`Welcome to Stryder`)
})

app.use('/api/auth', authRoutes)


//Set port for the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server active... Running on port ${PORT} ...`)
})