const express = require('express');
const router = express.Router();
// require mongoose
// require user schema
// require jwt token

router.post('/',(req, res)=>{
    const { rolecode, fname, lname, phone, email, linkedin, resume, experience,
    sourcecode, sourchingcode, vendorcode, r12name, r12date, candidatecode} = req.body;

    // add candidate details to candidates collections

    res.json({'token':'token'});
});

router.get('/',(req, res)=>{
    const { candidatecode} = req.body;

    // get candidate details from candidates collections

    res.json({'token':'token'});
});

module.exports = router;