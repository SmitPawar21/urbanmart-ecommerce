const express = require("express");
const router = express.Router();
const { v2: cloudinary } = require('cloudinary');

// PostgreSQL Configuration
const pool = require('../database/postgresql');

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Add a product - only use in backend
router.post('/add-product', async (req, res) => {
    const { title, description, price, gender, size, star, release_date, image_url } = req.body;
    console.log(req.body);

    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(image_url, {
            folder: 'products', // Specify folder in Cloudinary
        });

        // Store product details with the Cloudinary image URL
        const query = `
            INSERT INTO products (title, description, price, gender, size, star, release_date, image_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING prod_id
        `;
        const values = [title, description, price, gender, size, star, release_date, result.secure_url];

        const dbResult = await pool.query(query, values);
        const insertedId = dbResult.rows[0].prod_id;

        res.status(201).json({
            message: 'Product added successfully',
            productId: insertedId,
            imageUrl: result.secure_url,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Fetch all products
router.get('/products', async (req, res) => {
    try {
        const query = 'SELECT * FROM products';
        const result = await pool.query(query);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// only latest products
router.get('/latestproducts', async (req, res) => {
    try{
        const query = 'SELECT * FROM products ORDER BY release_date DESC LIMIT 4';
        const result = await pool.query(query);

        res.status(201).json(result.rows);
    } catch (err){
        console.error('Error fetching products:', error);
        res.status(500).json({message:'Internal server error'});
    }
});

// One Selected Product
router.post('/oneproduct', async(req, res)=>{
    const {p_id} = req.body;
    console.log(p_id);

    try{
        const query = `
            SELECT * FROM products
            WHERE prod_id = $1
        `;

        const value = [p_id];
        const result = await pool.query(query, value);

        res.status(201).json({item: result.rows[0]});
    } catch(err) {
        res.status(403).json({error: err});
    }
})

// Add To Cart
router.post('/addtocart', async (req, res) => {
    const { user_id, prod_id, quantity } = req.body;

    try {
        const checkQuery = `
            SELECT COUNT(*) AS count
            FROM cart
            WHERE user_id = $1 AND prod_id = $2
        `;
        const checkResult = await pool.query(checkQuery, [user_id, prod_id]);

        if (parseInt(checkResult.rows[0].count) > 0) {
            return res.status(201).json({ message: 'Already there in cart' });
        }

        const insertQuery = `
            INSERT INTO cart (user_id, prod_id, quantity)
            VALUES ($1, $2, $3)
        `;
        await pool.query(insertQuery, [user_id, prod_id, quantity]);

        res.status(201).json({ message: 'Added to Cart' });
    } catch (err) {
        console.log(err);
        res.status(403).json({ error: `Something went wrong. ${err.message}` });
    }
});

// display all cart items for particular User.
router.post('/allcartitems', async(req, res)=>{
    const {user_id} = req.body;

    try{
        const query = `
            SELECT products.title, products.price, products.image_url, cart.quantity, products.prod_id FROM products, cart
            WHERE (user_id = $1) AND (products.prod_id = cart.prod_id)
        `;
        
        const result = await pool.query(query, [user_id]);
        res.status(201).json({
            items: result.rows
        })
    } catch(err) {
        res.status(403).json({error: err});
    }
})

// Delete item from cart
router.post('/deleteitem', async (req, res) =>{
    const {user_id, prod_id} = req.body;
    console.log(user_id, prod_id);

    try{
        const query = `
            DELETE FROM cart
            WHERE user_id = $1 AND prod_id = $2
        `;

        const values = [user_id, prod_id];
        await pool.query(query, values);

        res.status(201).json({message: 'Successfully deleted'});
    } catch(err) {
        res.status(403).json({error: err});
    }
})


module.exports = router;