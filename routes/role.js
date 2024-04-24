const express = require('express');
const router = express.Router();
// require mongoose
// require user schema
// require jwt token

router.post('/add',(req, res)=>{
    const {company,
        role,
        technology,
        location,
        skill,
        ctc,
        minexp,
        maxexp,
        type,
        notice,
        workdays} = req.body;

    // add role details to role schema

    res.json({'token':'token'});
});

router.post('/close',(req, res)=>{
    const {company, role, date, location, technology, skills} = req.body;

    // delete the role form collection roles
});

router.post('/pause',(req, res)=>{
    const {company, role, date, location, technology, skills} = req.body;

    // update the role form collection roles
    // pause the role by setting inactive key in role object
});
module.exports = router;