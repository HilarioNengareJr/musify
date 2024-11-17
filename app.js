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
 * custom modules
 */

const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');

/**
 * login page
 */

app.use('/login', login);

/**
 * auth page
 */

app.use('/auth', auth);

/**
 *  auth page
 */

app.use('/auth', auth);

app.listen (5000, () => {
    console.log(`Server listening at http://localhost:5000`);
})