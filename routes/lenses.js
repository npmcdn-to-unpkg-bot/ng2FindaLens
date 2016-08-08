var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var Lens = require('../models/lens');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Someone just came to our app!');

    next();
});

/* Get Lenses */
router.get('/', function(req, res, next) {
    Lens.find()
        .exec(function(err, result) {
            if (err) {
                return res.status(400).json({
                    title: 'An error occurred',
                    error: 'err'
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
});

module.exports = router;