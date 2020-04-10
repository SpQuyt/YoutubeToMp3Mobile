import { StyleSheet } from 'react-native';
import {
  PADDING_SMALL, SCREEN_WIDTH, SCREEN_HEIGHT,
} from 'constants/sizes';
import { COLOR_SCREEN_BACKGROUND, COLOR_YOUTUBE } from 'constants/colors';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_SCREEN_BACKGROUND,
    width: SCREEN_WIDTH - PADDING_SMALL * 2,
    marginLeft: -PADDING_SMALL,
    height: SCREEN_HEIGHT * 0.5,
  },
  modalConfirmButton: {
    backgroundColor: COLOR_YOUTUBE,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
