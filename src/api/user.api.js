/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const {getData} = require('../config/axios.config');

const getProfile = async (req) => {
    const /** {object} */ {data: currentProfile} = await getData('/me', req.cookies.access_token);

    return currentProfile;
}

module.exports = {
    getProfile
}