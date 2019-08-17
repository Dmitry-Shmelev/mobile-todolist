import jwt_decode from 'jwt-decode';
import axios from 'axios';

import { isEmpty } from './Validator';


export const verifyToken = jwtToken => {
    let valid = false;
    let decoded = {};

    if (!isEmpty(jwtToken)) {
        decoded = jwt_decode(jwtToken);

        if (Date.now() < decoded.exp * 1000) {    /* token is available */
            console.log("Token is available:", decoded);
            valid = true;
        }
    }
    return {
        valid: valid,
        data: decoded,
    }
}

const setHeaderAuthorization = token => config => {
    if (!isEmpty(token)) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

export const setHeaderAuth = token => {
    axios.interceptors.request.use(
        setHeaderAuthorization(token)
    ), function (err) {
        return Promise.reject(err);
    };
};