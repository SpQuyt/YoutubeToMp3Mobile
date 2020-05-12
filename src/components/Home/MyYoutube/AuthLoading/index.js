import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { loadAuthDispatch } from 'datalayers/actions/auth.action';
import Auth from 'utils/auth';
import styles from './index.styles';

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
          NavigationWithoutProps.navigate('YoutubeStack');
        } else {
          NavigationWithoutProps.navigate('Auth');
        }
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

const mapDispatchToProps = {
  loadAuthDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
