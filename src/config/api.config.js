/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'

/**
 * node modules
 */

require('dotenv').config();

// web api base address
const BASE_URL = 'https://api.spotify.com/v1';

// spotify token base address
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

// spotify client id
const CLIENT_ID = "b5e16e315adc4ed5a58b2d4b7d923bd0";

// spotifY client secret
const CLIENT_SECRET = "0aea667f704847d3b92b6f26ab94718d";

// spotify redirect URI for authorization code flow
const REDIRECT_URI = "http://localhost:5000/auth/callback";

// scope of spotify api request
const SCOPE = "user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private playlist-modify-private playlist-modify-public user-read-email user-read-private";

// authentication state key
const STATE_KEY = 'spotify_auth_state';

// API request queries
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
    BASE_URL,
    TOKEN_BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}


