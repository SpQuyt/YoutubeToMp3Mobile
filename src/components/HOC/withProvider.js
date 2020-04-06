import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Platform, SafeAreaView } from 'react-native';
import store from 'datalayers/stores';

const withProvider = (WrappedComponent) => {
  function Wrapper() {
    if (Platform.OS === 'ios') {
      return (
        <ReduxProvider store={store}>
          <SafeAreaView>
            <WrappedComponent />
          </SafeAreaView>
        </ReduxProvider>
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
