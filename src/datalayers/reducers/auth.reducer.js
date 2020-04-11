import { authAction } from 'constants/actions';

export const INITIAL_STATE = {
  name: null,
  photo: null,
  email: null,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case authAction.GET_USER_SUCCESS: {
      if (payload === undefined || !payload || payload === null) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        name: payload.user.name,
        photo: payload.user.photo,
        email: payload.user.email,
      };
    }

    case authAction.ON_LOGOUT_GG: {
      return {
        ...state,
        name: null,
        photo: null,
        email: null,
      };
    }

    default:
      break;
  }
  return state;
};
