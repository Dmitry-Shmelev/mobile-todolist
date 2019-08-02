import { createStackNavigator } from 'react-navigation';

import List from './List';

export default createStackNavigator(
    {
        List: { screen: List },
    },
    {
        initialRouteName: 'List',
        headerMode: 'none',
    }
);
