import axios from 'axios';
import { apiURL } from '../../utils';

export const registerUser = userData => ({
    type: "REGISTER",
    payload: axios.post(apiURL("/user/register"), userData)
});

export const loginUser = userData => ({
    type: "LOGIN",
    payload: axios.post(apiURL("/user/login"), userData)
});

export const verifyToken = () => ({
    type: "VERIFY_TOKEN"
});

export const logoutUser = () => ({
    type: "LOGOUT"
});
