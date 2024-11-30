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
    console.log('Access object:', req.cookies.access_token); 
    const apiUrl = `/me/player/recently-played?limit=${itemLimit}`;

    try {
        const recentlyPlayedData = await getData(apiUrl, req.cookies.access_token);
        if (recentlyPlayedData && recentlyPlayedData.items) {
            console.log('\nAPI URL:', apiUrl);
            console.log('\nRecently Played Data in player api:', recentlyPlayedData.items);
            return recentlyPlayedData.items;
        } else {
            console.error('Unexpected API response structure:', recentlyPlayedData);
            throw new Error('Unexpected API response structure');
        }
    } catch (error) {
        console.error('Error fetching recently played data:', error);
        throw error; 
    }
};

module.exports = { getRecentlyPlayed };