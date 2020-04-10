import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import Auth from 'utils/auth';
import styles from './styles';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingAuth: true,
    };
  }

  componentDidMount() {
    Auth.updateAuth()
      .then(() => {
        this.setState({ isLoadingAuth: false });
        if (Auth.isAuth()) {
          NavigationWithoutProps.navigate('App');
        } else {
          NavigationWithoutProps.navigate('Auth');
        }
      }).catch(err => {
        Alert.alert(err);
      });
  }

  render() {
    const { isLoadingAuth } = this.state;
    if (isLoadingAuth) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
    return (<View />);
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
