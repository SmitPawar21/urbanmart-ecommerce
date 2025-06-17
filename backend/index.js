const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const databaseRouter = require("./router/databaseRouter");
const AuthRouter = require("./router/AuthRouter")
const cors = require("cors");
const pool = require('./database/postgresql');


const app = express();
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

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

app.listen(5000, () => {
    console.log("backend server listening on port: 5000");
})

module.exports = app;