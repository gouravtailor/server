const express = require('express');
const router = express.Router();
// require mongoose
// require user schema
// require jwt token

router.post('/',(req, res)=>{
    const { name, ctc, fixed, min, max, component,
            raise, due, location, biling,
            address, gst} = req.body;

    // add sales details to sales collections

    res.json({'token':'token'});
});

module.exports = router;