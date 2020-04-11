import { authAction } from 'constants/actions';
import Auth from 'utils/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { Alert } from 'react-native';
import { getUserDispatch } from 'datalayers/actions/auth.action';
import store from 'datalayers/stores';

const authMiddleware = () => next => (action) => {
  if (action.type === authAction.LOAD_AUTH_SUCCESS) {
    if (Auth.isAuth()) {
      store.dispatch(getUserDispatch())
        .then(res => {
          if (!res.success) {
            console.log(`Get user info from Auth: ${res.error}`);
            NavigationWithoutProps.navigate('Auth');
          } else {
            NavigationWithoutProps.navigate('App');
          }
        });
    } else {
      NavigationWithoutProps.navigate('Auth');
    }
  }
  if (action.type === authAction.ON_LOGIN_GG_SUCCESS) {
    GoogleSignin.getTokens()
      .then(result => {
        Auth.setAuth(result.accessToken, result.idToken);
        store.dispatch(getUserDispatch())
          .then(res => {
            if (!res.success) {
              console.log(`Get user info from Header: ${res.error}`);
              NavigationWithoutProps.navigate('Auth');
            } else {
              NavigationWithoutProps.navigate('App');
            }
          });
        NavigationWithoutProps.navigate('App');
      }).catch(err => {
        Alert.alert(err);
      });
  }
  if (action.type === authAction.ON_LOGOUT_GG_SUCCESS) {
    Auth.deleteAuth();
    Alert.alert('Alert', 'Please login again!', [{ text: 'Ok', onPress: () => { NavigationWithoutProps.navigate('AuthLoading'); } }]);
  }
  return next(action);
};

export default authMiddleware;
