const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/userModels"); 
const { response } = require('express');

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(200).send({ massage: "User Already Exists", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        req.body.password = encryptedPassword;
        const newuser = new user(req.body);
        await newuser.save();
        res.status(200).send("User registered successfully", success = true);
    } catch (error) {
        res.status(500).send({ massage: "Error creating User", success: false ,error });

    }
})

router.post('/login', async (req, res) => {
    try {
    } catch (error) {


    }
})

module.exports = router;