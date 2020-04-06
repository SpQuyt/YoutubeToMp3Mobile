import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import styles from './styles';
import NavigationWithoutProps from '../../utils/NavigationWithoutProps';

class Login extends Component {
  async onGGSignIn() {
    try {
      await GoogleSignin.signIn();
      NavigationWithoutProps.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('SIGN IN FAILED');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(error);
        // play services not available or outdated
      } else {
        Alert.alert(error);
        // some other error happened
      }
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <TouchableOpacity onPress={this.onGGSignIn}>
          <Text>Login Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
