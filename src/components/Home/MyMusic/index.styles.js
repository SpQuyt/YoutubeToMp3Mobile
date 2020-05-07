
import { StyleSheet } from 'react-native';
import { SIZE_TITLE, PADDING_SMALL } from 'constants/sizes';
import { COLOR_TITLE, COLOR_NORMAL_BUTTON, COLOR_SCREEN_BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_SCREEN_BACKGROUND,
  },
  button: {
    padding: PADDING_SMALL,
    backgroundColor: COLOR_NORMAL_BUTTON,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: SIZE_TITLE,
    color: COLOR_TITLE,
  },
});

export default styles;
