/**
 * @license Apache-2.0
 * @copyright Hilario Junior Nengare 2024
 */

'use strict';

const authenticateUser = (req, res) => {
    const {
        access_token,
        refresh_token
    } = req.cookies;

    if (access_token && !refresh_token){
        return res.redirect('/auth');
    } else if( !access_token && !refresh_token){
        return res.redirect('/login');
    } else if (!access_token && refresh_token){
        return res.redirect(`/auth/refresh_token?redirect=${req.originalUrl}`);
    }
}

module.exports = authenticateUser;