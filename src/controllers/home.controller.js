/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const trackApi = require('../api/track.api');

const home = async (req, res) => {

    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played 
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = recentlyPlayed.items.map(({track}) => track );

    // recommended albumss
    const trackIds = recentlyPlayedTracks.map(({id}) => id);
    const trackSeed = trackIds.slice(0, 5).join(',');
    const recommendedAlbums = await trackApi.getRecommendedTrack(req, trackSeed, apiConfig.LOW_LIMIT);


    res.render('./pages/home', {
        currentProfile,
        // recentlyPlayedTracks,
        recommendedAlbums
    });
}

module.exports = { home }