import { combineReducers } from 'redux';
import video from './video.reducer';
import auth from './auth.reducer';
import song from './song.reducer';

export default combineReducers({
  video,
  auth,
  song,
});
