const express = require('express');
const dotenv = require('dotenv');
const databaseRouter = require("./router/databaseRouter");
const AuthRouter = require("./router/AuthRouter")
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'https://urbanmart-ecommerce.vercel.app/',
    credentials: true 
}));

app.use('/', databaseRouter);
app.use('/', AuthRouter)

app.listen(PORT =>{
    console.log(PORT);
})
