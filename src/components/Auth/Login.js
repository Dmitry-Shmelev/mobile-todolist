import React, { Component } from 'react';
import { ImageBackground, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import styles from './style';
import { verifyToken, loginUser } from './action';
import { isEmpty, setHeaderAuth } from '../../utils';
import { BACKGROUND_IMAGE } from '../../constants';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    const token = this.props.auth.jwtToken;
    this.props.verifyToken(token);

    if (this.props.auth.loggedIn) {
      setHeaderAuth(this.props.auth.jwtToken);
      this.props.navigation.navigate('Main');
    }
  }

  setEmail = email => {
    this.setState({ email: email });
  }

  login = async () => {
    let userData = {
      email: this.state.email,
      password: this.state.password,
    }
    if (isEmpty(userData.email) || isEmpty(userData.password)) {
      Alert.alert('You have to enter your email address and password.');
      return;
    }
    await this.props.loginUser(userData);

    if (this.props.auth.loggedIn) {
      setHeaderAuth(this.props.auth.jwtToken);
      this.props.navigation.navigate('Main');
    } else {
      Alert.alert('Login failed.');
    }
  }

  render() {
    return (
      <ImageBackground source={BACKGROUND_IMAGE}
        style={styles.backgroundImage} >
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Sign into Wunderlist
            </Text>
            <Text style={styles.subTitle}>
              Use the email address and password used when you created your account.
            </Text>
            <TextInput style={styles.inputBox}
              onChangeText={(email) => this.setState({ email })}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email address"
              placeholderTextColor="#a0a0a0"
              keyboardType="email-address"
              autoCapitalize='none'
              onSubmitEditing={() => this.password.focus()}
              value={this.state.email}

            />

            <TextInput style={styles.inputBox}
              onChangeText={(password) => this.setState({ password })}
              placeholder="Password"
              placeholderTextColor="#a0a0a0"
              secureTextEntry={true}
              ref={(input) => this.password = input} />

            <TouchableOpacity style={styles.button}
              onPress={this.login}>
              <Text style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetLink}>
              <Text style={styles.forgetText}>
                Forget your password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateLink}
              onPress={() => this.props.navigation.navigate('Register', { setEmail: this.setEmail })}>
              <Text style={styles.navigateText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
};
Login.propTypes = {
  verifyToken: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  verifyToken: () => dispatch(verifyToken()),
  loginUser: userData => dispatch(loginUser(userData)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);