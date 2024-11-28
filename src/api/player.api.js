'use strict';

const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');

/**
 * Fetches the user's recently played tracks from Spotify.
 *
 * @param {Object} req - Server request object
 * @param {Number} itemLimit - Maximum number of items to return (default: apiConfig.DEFAULT_LIMIT)
 * @returns {Object|Error}
 */
const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
    const accessToken = req.cookies.access_token;

    if (!accessToken) {
        throw new Error('Access token is missing.');
    }

    try {
        const { data: recentlyPlayed } = await getData(`/me/player/recently-played?limit=${itemLimit}`, accessToken);
        return recentlyPlayed;
    } catch (error) {
        console.error('Error fetching recently played tracks:', error.message);
        throw error;
    }
};

module.exports = { getRecentlyPlayed };
