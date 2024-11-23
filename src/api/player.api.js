/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const { getData } = require('../config/axios.config');


const apiConfig = require('../config/api.config');
const { getAdapter } = require('axios');

const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
    const { data: getRecentlyPlayed } = await getData(`/me/player/recently-played?limit=${itemLimit}`, req.cookies.access_token);

    return getRecentlyPlayed;

}

module.exports = { getRecentlyPlayed }