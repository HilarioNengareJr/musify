/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

/**
 * custom modules
 */

const {getData} = require('../config/axios.config');

const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
    const { data: {
        tracks: recommendedTracks
    }} = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);

    return recommendedTracks;

}


module.exports = {
    getRecommendedTrack
}
