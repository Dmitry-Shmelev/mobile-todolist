import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

class TaskHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Icon name='angle-left' size={30} color='#ffffff' />
        <Text style={styles.title}>Upwork</Text>
        <Text style={styles.edit}>Edit</Text>
      </View>
    );
  }
}

export default TaskHeader;