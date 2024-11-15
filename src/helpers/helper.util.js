/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict'

/**
 * custom modules
 */

const apiConfig = require('../config/api.config');


/**
 * Generates a random string containing numbers and letters
 * @param {number} length this is the length of the string
 * @param {string} Generated string
 */
const generateRandomString = function (length){
    let /** {string | undefined} */ randomString = '';
    const /** {string} */ possibleLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i= 0; i < length - 1; i++){
        const /** {number} */  randomIndex = Math.floor(Math.random() * possibleLetters.length);
        randomString  += possibleLetters[randomIndex];
    }

    return randomString;
}


module.exports = {
    generateRandomString
}

