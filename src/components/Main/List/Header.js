import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

class ListHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>F</Text>
          </View>
          <Text style={styles.avatarName}>Frank</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name='bell-o' size={25} color='#ffffff' />
          <Icon name='comment-o' size={25} color='#ffffff' />
          <Icon name='search' size={25} color='#ffffff' />
        </View>
      </View>
    );
  }
}

export default ListHeader;