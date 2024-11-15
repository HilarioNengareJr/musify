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

const { auth } = require('../controllers/auth.controller');

router.get('/', auth);

module.exports = router;