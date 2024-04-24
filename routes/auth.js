const express = require('express');
const router = express.Router();
const Users = require("../schema/usersSchema");

// require mongoose
// require user schema
// require jwt token

router.post('/',(req, res)=>{
    const {username, password} = req.body;

    // serach user collection for username and password

    // if user not exist 
    // res.status(401).json(error : invalid credentials)

    // get token from jwt.sign()

    res.json({'token':'token'});
});

module.exports = router;