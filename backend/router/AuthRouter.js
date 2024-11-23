const express = require("express");
const router = express.Router();
const {signup, login, userAddress, username} = require("../controller/AuthController");

router.post('/signup', signup);
router.post('/login', login);
router.post('/useraddress', userAddress);
router.post('/username', username);

module.exports = router;