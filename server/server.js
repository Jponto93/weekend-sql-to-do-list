const express = require('express');
const bodyParser = require('body-parser');
const exp = require('constants');

const app = express();

// Setup body parser to translate request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve "static assets"
// from server/public
app.use(express.static('server/public'));

// start express
const PORT = 5000;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});