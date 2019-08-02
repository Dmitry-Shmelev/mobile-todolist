import jwt_decode from 'jwt-decode';

import { isEmpty } from './Validator';


export const verifyToken = jwtToken => {
    let valid = false;
    let decoded = {};

    if (!isEmpty(jwtToken)) {
        decoded = jwt_decode(jwtToken);

        if (Date.now() < decoded.exp * 1000) {    /* token is available */
            console.log("Token is available:", decoded);
        }
    }
    return {
        valid: valid,
        data: decoded,
    }
}
