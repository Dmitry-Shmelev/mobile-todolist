/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './store/configStore';
import appNavigator from './Navigator';

let Navigation = createAppContainer(appNavigator);
let { store, persistor } = configStore();



export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        )
    }
}