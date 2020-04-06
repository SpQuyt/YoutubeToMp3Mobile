import { tableAction } from 'constants/actions';
import { TABLE_SIZE } from 'constants/sizes';

export const INITIAL_STATE = {
  currentNumberToFill: 1,
  coordinationArray: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    default:
      break;
  }
  return state;
};
