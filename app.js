/**
 * @license Apache-2.0
 * @copyright 2025 Rupanjana Majhi
 */


'use strict';

/* node modules */
const express = require('express');
const path = require('path');

/* custom modules */
const register = require('./src/routes/register_route');

/* initialize express app */
const app = express();

// middleware to parse JSON and URL-encoded data
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// route registration
app.use('/register', register);

// root route
app.get('/', (req, res) => {
    res.redirect('/register');
});

// start server
app.listen(3000, () => {
    console.log('Server listening on port http://localhost:3000');
});