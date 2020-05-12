import { songAction } from 'constants/actions';

export const INITIAL_STATE = {
  allSongsList: [],
  onDeviceSongsList: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case songAction.GET_ALL_SONGS_LIST_SUCCESS: {
      return {
        ...state,
        allSongsList: payload,
      };
    }

    case songAction.GET_ON_DEVICE_SONGS_LIST_SUCCESS: {
      return {
        ...state,
        onDeviceSongsList: payload,
      };
    }


    default:
      break;
  }
  return state;
};
