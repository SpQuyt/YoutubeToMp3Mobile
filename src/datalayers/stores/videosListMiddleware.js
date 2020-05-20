import { videoAction } from 'constants/actions';
import { GoogleSignin } from '@react-native-community/google-signin';
import { Alert } from 'react-native';
import store from 'datalayers/stores';
import { saveVideosListDispatch } from 'datalayers/actions/video.action';
import { logoutGGDispatch } from 'datalayers/actions/auth.action';

const videosListMiddleware = () => next => (action) => {
  if (action.type === videoAction.GET_VIDEOS_LIST_SUCCESS) {
    const resultJSON = action.payload;
    console.log(resultJSON.status);
    if (resultJSON.status === 401) {
      console.log('HI1');
      GoogleSignin.revokeAccess()
        .then(() => {
          console.log('HI2');
          GoogleSignin.signOut()
            .then(() => {
              Alert.alert(
                'Alert',
                'Access Token is outdated! Please login again!',
                [
                  {
                    text: 'Ok',
                    onPress: () => {
                      store.dispatch(logoutGGDispatch())
                        .then(res => {
                          if (!res.success) {
                            console.log(`Logout err: ${res.error}`);
                          }
                        });
                    },
                  },
                ],
              );
            });
        }).catch(() => {
          Alert.alert(
            'Alert',
            'Access Token is outdated! Please login again!',
            [
              {
                text: 'Ok',
                onPress: () => {
                  store.dispatch(logoutGGDispatch())
                    .then(res => {
                      if (!res.success) {
                        console.log(`Logout err: ${res.error}`);
                      }
                    });
                },
              },
            ],
          );
        });
    } else {
      const dataFromJSON = resultJSON.items.map((item) => ({
        title: item.snippet.title.replace(/&amp;/g, '&').replace(/&quot;/g, '"')
          .replace(/&#39;/g, '\''),
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        videoId: item.id.videoId,
      }));
      store.dispatch(saveVideosListDispatch(dataFromJSON));
    }
  }
  return next(action);
};

export default videosListMiddleware;
