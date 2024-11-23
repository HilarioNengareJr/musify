/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');

const home = async (req, res) => {

    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played 
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = recentlyPlayed.items.map(({track}) => track );
    
    // recommended tracks
    

    res.render('./pages/home', {
        currentProfile,
        // recentlyPlayedTracks
    });
}

module.exports = { home }