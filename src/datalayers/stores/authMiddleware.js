import { authAction } from 'constants/actions';
import Auth from 'utils/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { Alert } from 'react-native';

const authMiddleware = () => next => (action) => {
  if (action.type === authAction.ON_LOGIN_GG_SUCCESS) {
    GoogleSignin.getTokens()
      .then(result => {
        Auth.setAuth(result.accessToken, result.idToken);
        NavigationWithoutProps.navigate('App');
      }).catch(err => {
        Alert.alert(err);
      });
  }
  if (action.type === authAction.ON_LOGOUT_GG_SUCCESS) {
    GoogleSignin.signOut()
      .then(() => {
        Auth.deleteAuth();
        NavigationWithoutProps.navigate('AuthLoading');
      }).catch(err => {
        Alert.alert(err);
      });
  }
  return next(action);
};

export default authMiddleware;
