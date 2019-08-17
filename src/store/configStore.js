import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore } from 'redux-persist';

import persistedReducer from '../reducers';


export default () => {
    let store = createStore(
        persistedReducer,
        applyMiddleware(thunk, promiseMiddleware)       // we use promiseMiddleware for async functions: pending, fulfilled, rejected
    );
    let persistor = persistStore(store);

    return { store, persistor };
}
