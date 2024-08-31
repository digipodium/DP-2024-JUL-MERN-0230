const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.get('/add', (req, res) => {

    console.log(req.body);
    res.send('response from userRouter');

    // new Model(req.body).save()
    //     .then((result) => {
    //         res.send(result);
    //     })
    //     .catch((err) => {
    //         res.send(err);
    //     });

})

module.exports = router;