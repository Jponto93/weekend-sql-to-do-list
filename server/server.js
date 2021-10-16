const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('./public/routes/tasks.router')


// Setup body parser to translate request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Serve "static assets"
// from server/public
app.use(express.static('server/public'));

// ROUTES
app.use('/tasks', taskRouter);

// start express
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});