import { authAction } from 'constants/actions';
import { GoogleSignin } from '@react-native-community/google-signin';

export const loginGGDispatch = () => ({
  type: authAction.ON_LOGIN_GG,
  promise: GoogleSignin.signIn(),
});

export const loadAuthDispatch = () => ({
  type: authAction.LOAD_AUTH,
});

export const getUserDispatch = () => ({
  type: authAction.GET_USER,
  promise: GoogleSignin.getCurrentUser(),
});

export const logoutGGDispatch = () => ({
  type: authAction.ON_LOGOUT_GG,
  promise: GoogleSignin.revokeAccess(),
});
