import { videoAction } from 'constants/actions';

export const INITIAL_STATE = {
  videosList: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case videoAction.SAVE_VIDEOS_LIST: {
      return {
        ...state,
        videosList: payload.videosList,
      };
    }

    default:
      break;
  }
  return state;
};
