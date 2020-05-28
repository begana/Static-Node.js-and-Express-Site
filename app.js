// require express middleware
const express = require('express');

// create express app
const app = express();

// set veiw engine
app.set('view engine', 'pug');

// set static assets on static server
app.use('/static', express.static('public'));

// import routes 
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

// set routes 
app.use(mainRoutes);
app.use('/project', projectRoutes);

// set errors for status 404 and 500 error
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

// set error handler with error messages 
app.use( ( err,req,res,next ) => {
    const error = err;
    console.log(error.message)
    res.render('error', { error });
});

// set local host 
app.listen('3000', () => {
    console.log('this app is running on localhost:3000');
});


