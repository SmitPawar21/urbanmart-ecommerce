const express = require('express');
const dotenv = require('dotenv');
const databaseRouter = require("./router/databaseRouter");
const AuthRouter = require("./router/AuthRouter")
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());

// Remove PORT_p variable since Vercel handles the port
app.use(cors({
    origin: ['https://urbanmart-ecommerce.vercel.app', 'https://urbanmart-ecommerce-zwgk.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

// In index.js
// Add this before your routes
app.use(async (req, res, next) => {
    try {
        const client = await pool.connect();
        await client.query('SELECT 1');
        client.release();
        next();
    } catch (err) {
        console.error('Database connection error:', err);
        return res.status(500).json({ 
            message: 'Database connection error',
            error: err.message 
        });
    }
});

app.use('/', databaseRouter);
app.use('/', AuthRouter);

// Remove app.listen() for serverless
// Instead export the app
module.exports = app;