/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'

/**
 * custom modules
 */

const axiosConfig = require('../config/axios.config');

const getRefreshToken = async (refreshToken) => {
    try {
        const response = await axiosConfig.token.post('/token', {
            grant_typ: 'refresh_token',
            refresh_token: refreshToken,

        })

        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getRefreshToken }