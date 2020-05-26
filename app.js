const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);


app.listen('3000', () => {
    console.log('this app is running on localhost:3000');
});


