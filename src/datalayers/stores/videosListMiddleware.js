import { videoAction, authAction } from 'constants/actions';
import { GoogleSignin } from '@react-native-community/google-signin';
import { Alert } from 'react-native';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';

const videosListMiddleware = () => next => (action) => {
  if (action.type === videoAction.GET_VIDEOS_LIST_FAILURE) {
    const result = action.payload;
    if (result.toString() === 'Error: Request failed with status code 401') {
      GoogleSignin.revokeAccess()
        .then(() => {
          Alert.alert(
            'Alert',
            'Access Token is outdated! Please login again!',
            [{
              text: 'Ok',
              onPress: () => ({
                type: authAction.ON_LOGOUT_GG,
                promise: GoogleSignin.signOut(),
              }),
            }],
          );
        }).catch(err => {
          if (err.toString() === 'Error: SIGN_IN_REQUIRED') {
            Alert.alert(
              'Alert',
              'Access Token is outdated! Please login again!',
              [{
                text: 'Ok',
                onPress: () => NavigationWithoutProps.navigate('Auth'),
              }],
            );
          }
        });
    }
  } if (action.type === videoAction.GET_VIDEOS_LIST_SUCCESS) {
    const result = action.payload;
    const dataFromJSON = result.data.items.map((item) => ({
      title: item.snippet.title.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
        .replace(/&#39;/g, '\''),
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      videoId: item.id.videoId,
    }));
    return next({
      type: videoAction.SAVE_VIDEOS_LIST,
      payload: {
        videosList: dataFromJSON,
      },
    });
  }
  return next(action);
};

export default videosListMiddleware;
