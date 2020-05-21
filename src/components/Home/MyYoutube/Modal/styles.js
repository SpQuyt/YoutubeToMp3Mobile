import { StyleSheet } from 'react-native';
import {
  PADDING_SMALL, SCREEN_WIDTH, SCREEN_HEIGHT,
  PADDING_MEDIUM, PADDING_HIGH, SIZE_TITLE,
} from 'constants/sizes';
import {
  COLOR_SCREEN_BACKGROUND, COLOR_YOUTUBE, COLOR_TEXT_NORMAL,
} from 'constants/colors';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'space-between',
    padding: PADDING_MEDIUM,
    backgroundColor: COLOR_SCREEN_BACKGROUND,
    width: SCREEN_WIDTH - PADDING_SMALL * 2,
    marginLeft: -PADDING_SMALL,
    height: SCREEN_HEIGHT * 0.5,
  },
  modalConfirmButton: {
    backgroundColor: COLOR_YOUTUBE,
    paddingVertical: PADDING_SMALL,
    paddingHorizontal: PADDING_HIGH,
    alignSelf: 'flex-end',
  },
  modalConfirmButtonText: {
    fontSize: SIZE_TITLE,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: SIZE_TITLE,
    color: COLOR_TEXT_NORMAL,
    marginVertical: PADDING_MEDIUM,
  },
});

export default styles;
