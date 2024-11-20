'use strict';

/**
 * node modules
 */
const axios = require('axios').default;
const querystring = require('querystring');

/** 
 * custom modules
 */
const apiConfig = require('./api.config');

/**
 * axios instance for access token and refresh token
 */
const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization': `Basic ${Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

const api = axios.create({ baseURL: apiConfig.BASE_URL });

/**
 * Function to fetch data from the API
 */
const getData = async (apiUrl, access_token) => {
    try {
        const response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return response;
    } catch (err) {
        console.error('Error fetching data:', err);
        throw new Error('Failed to fetch data from the API');
    }
};

module.exports = {
    token,
    getData
};
