import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

class CreateInput from Component {
  render() {
    return (
      <View style={[styles.item, styles.createInput]}>
        <Icon name='plus' size={20} />
        <TextInput placeholder='Add a to-do...' />
        <Icon name='star-o' size={20} />
      </View>
    );
  }
}

export default CreateInput;