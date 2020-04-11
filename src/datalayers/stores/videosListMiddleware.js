import { videoAction } from 'constants/actions';
import Auth from 'utils/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import NavigationWithoutProps from 'utils/NavigationWithoutProps';
import { Alert } from 'react-native';
import store from 'datalayers/stores';
import { saveVideosListDispatch } from 'datalayers/actions/video.action';
import { logoutGGDispatch } from 'datalayers/actions/auth.action';

const videosListMiddleware = () => next => (action) => {
  if (action.type === videoAction.GET_VIDEOS_LIST_SUCCESS) {
    const result = action.payload;
    result.json()
      .then(resultJSON => {
        if (resultJSON.error !== undefined) {
          console.log(resultJSON.error);
          if (resultJSON.error.code === 403) {
            Alert.alert('You have reached max quota!');
          }
          if (resultJSON.error.code === 401) {
            store.dispatch(logoutGGDispatch())
              .then(res => {
                if (!res.success) {
                  console.log(`Logout by video: ${res.error}`);
                }
              });
          } else {
            Alert.alert('Something is wrong with accessing Youtube videos...');
          }
        } else {
          const dataFromJSON = resultJSON.items.map((item) => ({
            title: item.snippet.title.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, '\''),
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high.url,
            videoId: item.id.videoId,
          }));
          store.dispatch(saveVideosListDispatch(dataFromJSON))
            .then(res => {
              if (!res.success) {
                console.log(`Save videos: ${res.error}`);
              }
            });
        }
      })
      .catch(err => {
        console.log(`VideosList: ${err}`);
      });
  }
  return next(action);
};

export default videosListMiddleware;
