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

module.exports = router;