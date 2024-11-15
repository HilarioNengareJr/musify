/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'

/**
 * node modules
 */

const querystring = require('querystring');

/**
 * custom modules
 */

const apiConfig = require('../config/api.config');
const utils = require('../helpers/helper.util');


const auth = (req, res) => {

    const /** {string} */ state = utils.generateRandomString(16);
    res.cookie(apiConfig.STATE_KEY, state);

    res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id: apiConfig.CLIENT_ID,
        scope: apiConfig.SCOPE,
        redirect_uri: apiConfig.REDIRECT_URI,
        state
    }));
}

module.exports = {
    auth
}