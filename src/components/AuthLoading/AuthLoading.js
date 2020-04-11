import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadAuthDispatch } from 'datalayers/actions/auth.action';
import styles from './styles';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingAuth: true,
    };
  }

  componentDidMount() {
    const { loadAuthDispatch } = this.props;
    this.setState({ isLoadingAuth: false });
    loadAuthDispatch()
      .then(res => {
        if (!res.success) {
          console.log(`Load auth: ${res.error}`);
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
