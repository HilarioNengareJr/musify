'use strict';

/**
 * node modules
 */

const cors = require('cors');
const cookieParser = require('cookie-parser');

// initial express app
const express = require('express');
const app = express();

/**
 * EJS setting
 */

app.set('view engine', 'ejs');

/**
 * setting static directory
 */

app.use(express.static(`${__dirname}/public`));


/**
 * enable cors and cookie parser
 */

app.use(cors()).use(cookieParser());



/**
 * login page
 */

app.get('/login', (req, res) => {
    res.send('Login');
});

/**
 * 
 */

app.listen (5000, () => {
    console.log(`Server listening at http://localhost:5000`);
})