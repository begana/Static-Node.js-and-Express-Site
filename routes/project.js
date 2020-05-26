const express = require('express');
const router = express.Router();

const { projects } = require('../data.json');


router.get('/:id', ( req,res ) => {
    const { id } = req.params;
    const text = projects[id];

    const templateData = { text }
    templateData.title = text.project_name;
    templateData.description = text.description;
    templateData.technologies = text.technologies;
    templateData.live_demo = text.live_link;
    templateData.github_link = text.github_link;
    templateData.images = text.img_urls;
    
   
    


    res.render('project', templateData );
});

module.exports = router;