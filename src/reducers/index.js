import { combineReducers } from "redux";
import authReducer from "./Auth";
import listReducer from "./List";
import taskReducer from "./Task";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['jwtToken']
};

const rootReducer = combineReducers({

    auth: persistReducer(authPersistConfig, authReducer),
    list: listReducer,
    task: taskReducer,

});

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
};

export default persistReducer(rootPersistConfig, rootReducer);