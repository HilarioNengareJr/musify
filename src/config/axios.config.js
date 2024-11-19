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

const apiConfig = require('./api.config');


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