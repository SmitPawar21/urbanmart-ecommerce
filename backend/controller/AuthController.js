const {insertRowUsers , isEmailExists, checkPassword, getAddress} = require("../database/authDatabase");
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
    const userId = await checkPassword(email, password);

    if(doesEmailExists && userId){

        res.cookie('user_id', userId,{
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'strict',
        })

        return res.status(201).json({message:'User Logged in successfully', user_id: userId});
    }

    return res.status(403).json({error:'Check your credentials again'});
}

const userAddress = async (req, res)=>{
    const {user_id} = req.body;

    try{
        const result = await getAddress(user_id);
        console.log(result);
        res.status(201).json({street: result.street, city: result.city, state: result.state});
    } catch(err) {
        res.status(403).json({error: err});
    }
}

module.exports = {signup, login, userAddress};