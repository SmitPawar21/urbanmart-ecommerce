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
    origin: 'https://urbanmart-ecommerce.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use('/', databaseRouter);
app.use('/', AuthRouter)

app.listen(PORT_p =>{
    console.log(PORT_p);
})
