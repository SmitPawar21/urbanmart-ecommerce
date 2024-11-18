const {insertRowUsers , isEmailExists, checkPassword} = require("../database/authDatabase");
const bcrypt = require("bcrypt");

const signup = async (req, res) =>{

    const {name, email, password, street, city, state, phone} = req.body;
    console.log(req.body);

    const doesEmailExists = await isEmailExists(email);

    if(doesEmailExists)
        return res.status(203).json({error: 'email already exists'});

    // const hashedPassword = bcrypt.hash(password, 10);

    try{
        await insertRowUsers(name, email, password, street, city, state, phone);
        console.log("inserted data successfullyy. user created!!")

        res.status(201).json({message: 'user created successfully'});
    } catch(err) {
        console.log(err);
        res.status(203).json({error: err});
    }
}

const login = async (req, res) =>{
    const {email, password} = req.body;
    
    const doesEmailExists = await isEmailExists(email);
    const savedPassword = await checkPassword(email, password);

    if(doesEmailExists && savedPassword)
        return res.status(201).json({message:'User Logged in successfully'});

    return res.status(403).json({error:'Check your credentials again'});
}

module.exports = {signup, login};