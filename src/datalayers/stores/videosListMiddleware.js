import { videoAction } from 'constants/actions';
import Auth from 'utils/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { Alert } from 'react-native';
import store from 'datalayers/stores';
import { saveVideosListDispatch } from 'datalayers/actions/video.action';

const videosListMiddleware = () => next => (action) => {
  if (action.type === videoAction.GET_VIDEOS_LIST_SUCCESS) {
    const resultJSON = action.payload;
    if (resultJSON.error !== undefined) {
      GoogleSignin.revokeAccess()
        .then(() => {
          GoogleSignin.signOut()
            .then(() => {
              Auth.deleteAuth();
              Alert.alert(
                'Alert',
                'Access Token is outdated! Please login again!',
                [
                  {
                    text: 'Ok',
                    onPress: () => {
                      NavigationWithoutProps.navigate('AuthLoading');
                    },
                  },
                ],
              );
            });
        }).catch(err => {
          Alert.alert(err);
        });
    }
    const dataFromJSON = resultJSON.items.map((item) => ({
      title: item.snippet.title.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
        .replace(/&#39;/g, '\''),
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      videoId: item.id.videoId,
    }));
    store.dispatch(saveVideosListDispatch(dataFromJSON));
  }
  return next(action);
};

export default videosListMiddleware;
