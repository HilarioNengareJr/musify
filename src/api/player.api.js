/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const { getData, getRefreshToken } = require('../config/axios.config');


const apiConfig = require('../config/api.config');

/**
 * 
 * @param {Object} req - server request object
 * @param {Number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */

const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
    try {
        const {data: recentlyPlayed} = await getData(`/me/player/recently-played?limit=${itemLimit}`, req.cookies.access_token);
        console.log('Recently Played Data:', JSON.stringify(recentlyPlayed, null, 2));
        return recentlyPlayed;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('Access token expired, attempting to refresh token');
            const refreshToken = req.cookies.refresh_token;
            const newTokenResponse = await getRefreshToken(refreshToken);
            if (newTokenResponse && newTokenResponse.data) {
                const newAccessToken = newTokenResponse.data.access_token;
                req.cookies.access_token = newAccessToken;
                const {data: recentlyPlayed} = await getData(`/me/player/recently-played?limit=${itemLimit}`, newAccessToken);
                console.log('Recently Played Data:', JSON.stringify(recentlyPlayed, null, 2));
                return recentlyPlayed;
            }
        }
        console.error('Error fetching recently played data:', error.message);
        throw error;
    }
}

module.exports = { getRecentlyPlayed }
