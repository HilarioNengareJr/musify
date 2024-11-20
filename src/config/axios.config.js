/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * node modules
 */

const axios = require('axios').default;
const querystring = require('querystring');

/** 
 * custom modules
 */

const apiConfig = {
    CLIENT_ID: 'your_client_id',
    CLIENT_SECRET: 'your_client_secret',
    REDIRECT_URI: 'http://localhost:5000/auth/callback', // Ensure this matches the one in Spotify Developer Dashboard
    SCOPE: 'user-read-private user-read-email',
    STATE_KEY: 'spotify_auth_state',
    TOKEN_BASE_URL: 'https://accounts.spotify.com/api',
    BASE_URL: 'https://api.spotify.com/v1'
};

module.exports = apiConfig;


/**
 * axios instance for access token and refresh token
 */

const token = axios.create(
    {
        baseURL: apiConfig.TOKEN_BASE_URL,
        headers: {
            'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET.toString('base64')))}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
);


const api =  axios.create({baseURL: apiConfig.BASE_URL});


const getData = async (apiUrl, access_token) => {
    try {
        const /** {Promise} */ response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return response;
    } catch (err){
        console.log(err);
    }
}

module.exports = {
    token,
    getData
}
