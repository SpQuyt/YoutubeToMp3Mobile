
import { StyleSheet } from 'react-native';
import {
  PADDING_MEDIUM, SIZE_TITLE_2, SIZE_TITLE,
} from 'constants/sizes';
import {
  COLOR_SCREEN_BACKGROUND, COLOR_TEXT_NORMAL,
} from 'constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_SCREEN_BACKGROUND,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: PADDING_MEDIUM,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: SIZE_TITLE,
    color: COLOR_TEXT_NORMAL,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: 40,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: PADDING_MEDIUM,
  },
});

export default styles;
