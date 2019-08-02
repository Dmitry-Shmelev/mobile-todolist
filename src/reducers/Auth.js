import { verifyToken } from '../utils';

const initialState = {
    isFetching: false,
    loggedIn: false,
    registered: false,
    user: {},
    jwtToken: '',
};

export default (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "REGISTER_PENDING":
            return {
                ...state,
                isFetching: true,
                registered: false,
                jwtToken: '',
            };
        case "REGISTER_FULFILLED":
            console.log(action.payload.data);
            return {
                ...state,
                isFetching: false,
                loggedIn: false,
                registered: true,
                jwtToken: '',
            };
        case "REGISTER_REJECTED":
            console.log(action.payload.response.data);
            return {
                ...state,
                isFetching: false,
                registered: false,
                jwtToken: '',
            };

        case "LOGIN_PENDING":
            return {
                ...state,
                isFetching: true,
                loggedIn: false,
                jwtToken: '',
            };
        case "LOGIN_FULFILLED":
            console.log(action.payload.data);
            let userData = action.payload.data;
            delete userData.token;
            return {
                ...state,
                isFetching: false,
                loggedIn: true,
                user: userData,
                jwtToken: action.payload.data.token,
            };
        case "LOGIN_REJECTED":
            console.log(action.payload.response.data);
            return {
                ...state,
                isFetching: false,
                loggedIn: false,
                jwtToken: '',
            };

        case "VERIFY_TOKEN":
            let verifyInfo = verifyToken(state.jwtToken);
            return {
                ...state,
                isFetching: false,
                loggedIn: verifyInfo.valid,
                user: verifyInfo.data,
            };

        case "LOGOUT_USER":
            return {
                ...state,
                isFetching: false,
                loggedIn: false,
                user: {},
                jwtToken: '',
            };

        default:
            return state;
    }
}