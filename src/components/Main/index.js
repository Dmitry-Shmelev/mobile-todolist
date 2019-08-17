import { createStackNavigator } from 'react-navigation';

import List from './List';
import Task from './Task';

export default createStackNavigator(
    {
        List: { screen: List },
        Task: { screen: Task }
    },
    {
        initialRouteName: 'Task',
        headerMode: 'none',
    }
);
