import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { GoogleSignin } from '@react-native-community/google-signin';
import styles from './styles';
import NavigationWithoutProps from '../../utils/NavigationWithoutProps';

class AuthLoading extends React.Component {
  componentDidMount() {
    GoogleSignin.isSignedIn()
      .then(isSignedIn => {
        if (!isSignedIn) {
          NavigationWithoutProps.navigate('Auth');
        } else {
          NavigationWithoutProps.navigate('App');
        }
      });
  }

  render() {
    return (
      <View style={styles.screen}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
