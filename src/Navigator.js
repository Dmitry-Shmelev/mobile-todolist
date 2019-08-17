import { createSwitchNavigator } from 'react-navigation';

import AuthStack from './components/Auth';
import MainStack from './components/Main';


export default createSwitchNavigator(
    {
        Auth: AuthStack,
        Main: MainStack,
    },
    {
        initialRouteName: 'Auth',
    }
);

