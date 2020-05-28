// require express middleware
const express = require('express');
// create mini app and routes to it
const router = express.Router();

// require json data file
const { projects } = require('../data.json');

// indicate a route parameter that treat the url as a variable
router.get('/:id', ( req,res ) => {
    // create id variable that is stored in the request object params property
    const { id } = req.params;
    // create text variable that is stored project data
    const text = projects[id];

    // set templateData variable to add programming logic to project template
    const templateData = { text }
    // set properties for project template 
    templateData.title = text.project_name;
    templateData.description = text.description;
    templateData.technologies = text.technologies;
    templateData.live_demo = text.live_link;
    templateData.github_link = text.github_link;
    templateData.images = text.img_urls;

    // pass project template and templateData variable
    res.render('project', templateData );
});

// export router app
module.exports = router;