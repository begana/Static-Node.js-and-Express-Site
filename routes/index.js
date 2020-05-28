// require express middleware
const express = require('express');
// create mini app and routes to it
const router = express.Router();

// require json data file
const { projects } = require('../data.json');

// create route for the root page
router.get('/', ( req,res ) => {
    // pass index template and data file
    res.render('index', { projects });
});

// create route for the about page
router.get('/about', ( req,res ) => {
    // pass about template
    res.render('about');
});

// export router app
module.exports = router;