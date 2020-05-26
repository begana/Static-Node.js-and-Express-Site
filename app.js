const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);

app.use( ( req,res,next ) => {
    const err = new Error('Oh No! Page Not Found.');
    err.status = 404;
    next(err);
});

app.use( ( req,res,next ) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err);
});

app.use( ( err,req,res,next ) => {
    const error = err;
    console.log(error.message)
    res.render('error', { error });
});

app.listen('3000', () => {
    console.log('this app is running on localhost:3000');
});


