const express = require("express");
const router = express.Router();
const {signup, login, userAddress} = require("../controller/AuthController");

router.post('/signup', signup);
router.post('/login', login);
router.post('/useraddress', userAddress);

module.exports = router;