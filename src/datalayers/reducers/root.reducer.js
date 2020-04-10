import { combineReducers } from 'redux';
import video from './video.reducer';
import auth from './auth.reducer';

export default combineReducers({
  video,
  auth,
});
