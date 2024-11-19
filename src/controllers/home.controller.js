/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const home = async (req, res) => {
    res.render('./pages/home');
}

module.exports = { home }