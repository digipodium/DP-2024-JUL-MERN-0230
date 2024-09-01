const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {

    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });

})

module.exports = router;