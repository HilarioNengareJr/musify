/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

const authenticateUser = (req, res, next) => {
    const {
        access_token,
        refresh_token
    } = req.cookies;

    // Check if the user is already on the login page
    if (req.path === '/login') {
        return next();
    }

    if (access_token && !refresh_token){
        return res.redirect('/auth');
    } else if( !access_token && !refresh_token){
        return res.redirect('/login');
    } else if (!access_token && refresh_token){
        return res.redirect(`/auth/refresh_token?redirect=${req.originalUrl}`);
    }

    next();
}

module.exports = authenticateUser;
