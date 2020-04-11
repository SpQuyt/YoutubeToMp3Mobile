import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Platform, SafeAreaView } from 'react-native';
import store from 'datalayers/stores';
import { COLOR_SCREEN_BACKGROUND } from 'constants/colors';

const withProvider = (WrappedComponent) => {
  function Wrapper() {
    if (Platform.OS === 'ios') {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_SCREEN_BACKGROUND }}>
          <ReduxProvider store={store}>
            <WrappedComponent />
          </ReduxProvider>
        </SafeAreaView>
      );
    }
    return (
      <ReduxProvider store={store}>
        <WrappedComponent />
      </ReduxProvider>
    );
  }

  return Wrapper;
};

export default withProvider;
