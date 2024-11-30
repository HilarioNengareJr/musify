const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const trackApi = require('../api/track.api');
const artistApi = require('../api/artist.api');

const home = async (req, res) => {
    try {
        // current user profile
        const currentProfile = await userApi.getProfile(req);

        // recently played 
        const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
        console.log('?\n\n\nGet recently played in home controller: ', recentlyPlayed);
        const recentlyPlayedTracks = recentlyPlayed.map(({ track }) => track);

        // recommended albums
        const trackIds = recentlyPlayedTracks.map(({ id }) => id);
        const trackSeed = trackIds.slice(0, 5).join(',');
        const recommendedAlbums = await trackApi.getRecommendedTrack(req, trackSeed, apiConfig.LOW_LIMIT);
        console.log(recommendedAlbums);

        // recommended artists
        const artistIdEntries = recommendedAlbums.map(track => track.artists.map(artist => artist.id));
        const uniqueArtistIds = [...new Set(artistIdEntries.flat(1))].join(',');
        const recommendedArtists = await artistApi.getSeveralDetail(req, uniqueArtistIds);

        console.log('recommendedArtists');
        res.render('./pages/home', {
            currentProfile,
            // recentlyPlayedTracks,
            recommendedAlbums,
            recommendedArtists
        });
    } catch (error) {
        console.error('Error in home controller:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { home }