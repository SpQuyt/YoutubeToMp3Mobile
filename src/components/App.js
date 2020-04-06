import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import withProvider from 'components/HOC/withProvider';
import SwitchStack from 'components/Navigator';
import { GOOGLE_INFO } from 'constants/links';
import { GoogleSignin } from '@react-native-community/google-signin';

console.disableYellowBox = true;

GoogleSignin.configure({
  scopes: GOOGLE_INFO.scopes,
  webClientId: GOOGLE_INFO.webClientId,
});

class App extends Component {
  render() {
    return (
      <SwitchStack ref={navigatorRef => {
        NavigationWithoutProps.setTopLevelNavigator(navigatorRef);
      }}
      />
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default withProvider(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
