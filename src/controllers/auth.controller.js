/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * node modules
 */

const querystring = require('querystring');

/**
 * custom modules
 */

const apiConfig = require('../config/api.config');
const utils = require('../helpers/helper.util');
const { getToken } = require('../api/auth.api');

const auth = (req, res) => {

    const /** {string} */ state = utils.generateRandomString(16);
    res.cookie(apiConfig.STATE_KEY, state);

    res.redirect('https://accounts.spotify.com/authorize?response_type=code&client_id=' + apiConfig.CLIENT_ID + '&scope=' + encodeURIComponent(apiConfig.SCOPE) + '&redirect_uri=' + encodeURIComponent(apiConfig.REDIRECT_URI) + '&state=' + state);
}


const callback = async (req, res) => {
    const MILLISECONDS = 1000;
    const ONE_WEEK = 604800000;

    const {
        code = null,
        state = null,
        error = null
    } = req.query;

    const /** {string} */ storedState = req.cookies[apiConfig.STATE_KEY];

    if (error || !state || state !== storedState || !storedState) {
        console.error('State validation failed:', { error, state, storedState });
        return res.redirect('/login');
    } else {

        res.clearCookie(apiConfig.STATE_KEY);

        try {
            const response = await getToken(code);

            if (response) {
                if (response.status === 200) {
                    console.log(response.data);

                    const {
                        access_token,
                        refresh_token,
                        expires_in
                    } = response.data;

                    res.cookie('access_token', access_token, { maxAge: expires_in * MILLISECONDS });
                    res.cookie('refresh_token', refresh_token, { maxAge: ONE_WEEK });
                    res.redirect('/');
                } else {
                    console.error('Token request failed:', response.status, response.data);
                    res.redirect('/login');
                }
            } else {
                console.error('Token request returned undefined response:', response);
                res.redirect('/login');
            }
        } catch (err) {
            console.error('Error during token request:', err);
            res.redirect('/login');
        }

        console.log('Callback query:', req.query);
    }
}

module.exports = {
    auth,
    callback
}
