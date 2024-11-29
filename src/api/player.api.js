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

/**
 * 
 * @param {Object} req - server request object
 * @param {Number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */

const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
    console.log('Cookies:', req.cookies); 
    const { data: recentlyPlayed } = await getData(`/me/player/recently-played?limit=${itemLimit}`, req.cookies.access_token);
    return JSON.stringify(recentlyPlayed, null, 2);
}


module.exports = { getRecentlyPlayed }
