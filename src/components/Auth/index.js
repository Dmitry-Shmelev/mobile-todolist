import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';

export default createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);
