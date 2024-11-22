/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'
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
const authenticateUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route');

/**
 * login page
 */

app.use('/login', login);


/**
 *  auth page
 */

app.use('/auth', auth);

/**
 *  check user is authenticated
 */

app.use(authenticateUser);

/**
 *  home page 
 */

app.use('/', home);



app.listen (5000, () => {
    console.log(`Server listening at http://localhost:5000`);
})
