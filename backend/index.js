const express = require('express');
const dotenv = require('dotenv');
const databaseRouter = require("./router/databaseRouter");
const AuthRouter = require("./router/AuthRouter")
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());

const PORT_p = process.env.PORT;

app.use(cors({
    origin: ['https://urbanmart-ecommerce.vercel.app', 'https://urbanmart-ecommerce-zwgk.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', databaseRouter);
app.use('/', AuthRouter);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT_p, () =>{
    console.log(PORT_p);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});