import React, { Component } from 'react';
import { ImageBackground, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './style';
import { registerUser } from './action';
import { BACKGROUND_IMAGE } from '../../constants';
import { isEmpty } from '../../utils';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        };
    }

    navigateLogin = () => {
        const { navigation } = this.props;
        navigation.state.params.setEmail(this.state.email);
        navigation.navigate('Login');
    }

    register = async () => {
        if (isEmpty(this.state.firstName) || isEmpty(this.state.lastName) ||
            isEmpty(this.state.email) || isEmpty(this.state.password) || isEmpty(this.state.password2)) {
            Alert.alert('', 'You have to fill all information!');
            return;
        }
        if (this.state.password != this.state.password2) {
            Alert.alert('', 'Your password does not match!');
            return;
        }

        await this.props.registerUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        });
        if (this.props.auth.registered) {
            Alert.alert('', 'You have registered successfully!',
                [{ text: 'Ok', onPress: this.navigateLogin }]);
        } else {
            Alert.alert('', 'Your registration failed!');
            return;
        }
    }

    render() {
        return (
            <ImageBackground source={BACKGROUND_IMAGE}
                style={styles.backgroundImage}>
                <View style={styles.root}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Sign upto Wunderlist
                        </Text>
                        <Text style={styles.subTitle}>
                            Input your full name, email address and password to creat your account.
                        </Text>

                        <TextInput style={styles.inputBox}
                            onChangeText={(firstName) => this.setState({ firstName })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="First name"
                            placeholderTextColor="#a0a0a0"
                            onSubmitEditing={() => this.lastName.focus()} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(lastName) => this.setState({ lastName })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Last name"
                            placeholderTextColor="#a0a0a0"
                            onSubmitEditing={() => this.email.focus()}
                            ref={input => this.lastName = input} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Email address"
                            placeholderTextColor="#a0a0a0"
                            keyboardType="email-address"
                            autoCapitalize='none'
                            onSubmitEditing={() => this.password.focus()}
                            ref={input => this.email = input} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder="Password"
                            placeholderTextColor="#a0a0a0"
                            secureTextEntry={true}
                            onSubmitEditing={() => this.password2.focus()}
                            ref={(input) => this.password = input} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(password2) => this.setState({ password2 })}
                            placeholder="Confirm your password"
                            placeholderTextColor="#a0a0a0"
                            secureTextEntry={true}
                            ref={(input) => this.password2 = input} />

                        <TouchableOpacity style={styles.button}
                            onPress={this.register}>
                            <Text style={styles.buttonText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigateLink}
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.navigateText}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ImageBackground>
        );
    }
};
Register.propTypes = {
    auth: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);