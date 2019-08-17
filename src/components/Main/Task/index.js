import React, { Component } from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';

import { BACKGROUND_IMAGE } from '../../../constants';
import styles from './style';
import Header from './Header';

class Task extends Component {
  render() {
    return (
      <ImageBackground source={BACKGROUND_IMAGE}
        style={styles.backgroundImage} >
        <SafeAreaView>
          <Header />
          <View style={styles.content}>

          </View>
          <View style={styles.footer}>

          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Task;