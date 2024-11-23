const pool = require('./postgresql');

const insertRowUsers = async (name, email, password, street, city, state, phone) => {
    const query = `
        INSERT INTO users (name, email, password, street, city, state, phone)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    try{
        const values=[name, email, password, street, city, state, phone]
        await pool.query(query, values);
        return;
    } catch (err){
        console.error('Insertion Error: ', err);
        return 0;
    }
};

const isEmailExists = async (email) =>{
    const query = `
        SELECT EXISTS (
            SELECT 1 
            FROM users 
            WHERE email = $1
        )
    `;

    const result = await pool.query(query, [email]);
    return result.rows[0].exists;
};

const checkPassword = async(email, password) =>{
    const query = `
        SELECT user_id
        FROM users
        WHERE email = $1 AND password = $2
    `;

    const result = await pool.query(query, [email, password]);
    if (result.rows.length > 0) {
        console.log(result.rows[0].user_id);
        return result.rows[0].user_id;
    }
    return null;
}

const getAddress = async(user_id) => {
    const query = `
        SELECT street, city, state FROM users WHERE user_id = $1
    `;

    try{
        const value = [user_id];
        const result = await pool.query(query, value);
        return result.rows[0];
    } catch(err){
        return null;
    }
}

const getUsername = async(user_id) => {
    const query = `
        SELECT name, email FROM users
        WHERE user_id = $1
    `;

    try{
        const result = await pool.query(query, [user_id]);
        return result.rows[0];
    } catch (err){
        return null;
    }
}

module.exports = {insertRowUsers, isEmailExists, checkPassword, getAddress, getUsername};