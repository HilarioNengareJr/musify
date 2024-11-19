/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */

const { auth, callback } = require('../controllers/auth.controller');
const { refreshToken } = require('../controllers/refresh_token.controller');

router.get('/', auth);

router.get('/callback', (req, res) => {
    callback(req, res).catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

router.get('/refresh_token', refreshToken);

module.exports = router;
