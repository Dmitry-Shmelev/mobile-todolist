import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "../reducers";

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware)       // we use promiseMiddleware for async functions: pending, fulfilled, rejected
);

export default store;