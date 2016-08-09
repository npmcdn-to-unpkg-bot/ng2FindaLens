var express = require('express');
var router = express.Router();
var Lens = require('../models/lens');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Someone just came to our app!');

    next();
});

/* Get Lenses */
// router.get('/', function(req, res, next) {
//     Lens.find()
//         .exec(function(err, result) {
//             if (err) {
//                 return res.status(400).json({
//                     title: 'An error occurred',
//                     error: 'err'
//                 });
//             }
        
//             res.status(200).json({
//                 message: 'Success',
//                 obj: result
//             });
//         });
// });

// routes that end in /lens
router.route('/lenses')

// create a lens (access at POST http://localhost:3000/api/lenses)
.post(function(req, res) {
    var lens = new Lens(req.body);
    
    lens.save(function(err) {
        if (err) {
            // duplicate entry
            if (err.code == 11000)
                return res.json({ success: false, message: 'A lens with that model already exists.' });
            else 
                return res.send(err);
        }
        
        res.json({ success: true, message: 'Lens Created!' });
    });
})

// get all lenses (access at GET http://localhost:3000/api/lenses)
.get(function(req, res) {
    Lens.find(function(err, lenses) {
        if (err) res.send(err);

        // res.status(200).json({
        //     message: 'Success',
        //     obj: lenses
        // });
        res.json(lenses);
    });
});

module.exports = router;