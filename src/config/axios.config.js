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
        return response.data;
    } catch (err) {
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error data:', err.response.data);
            console.error('Error status:', err.response.status);
            console.error('Error headers:', err.response.headers);

            if (err.response.status === 404) {
                throw new Error('The requested resource was not found.');
            } else {
                throw new Error('Failed to fetch data from the API');
            }
        } else if (err.request) {
            // The request was made but no response was received
            console.error('No response received:', err.request);
            throw new Error('No response received from the API');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', err.message);
            throw new Error('Error setting up the request');
        }
    }
};

module.exports = {
    token,
    getData
};