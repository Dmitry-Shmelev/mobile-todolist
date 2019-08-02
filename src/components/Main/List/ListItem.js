import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './style';

export default class ListItem extends Component {
  render() {
    const { onClick, icon, text } = this.props;

    return (
      <View style={styles.listItem}>
        <Icon name={icon} size={25} color='#ffffff' />
        <Text style={styles.listItemText}>{text}</Text>
      </View>);
  }
}