import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

class CreateButton extends Component {
  render() {
    return (
      <View style={styles.createButton}>
        <Icon name='plus-circle' size={70} color='#2874cc' />
      </View>
    );
  }
}

export default CreateButton;