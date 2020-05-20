
import { StyleSheet } from 'react-native';
import {
  PADDING_MEDIUM, VIDEOS_LIST_HEIGHT, PADDING_SMALL, SCREEN_WIDTH, SIZE_TITLE,
} from 'constants/sizes';
import {
  COLOR_SCREEN_BACKGROUND, COLOR_YOUTUBE, COLOR_TEXT_NORMAL,
} from 'constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_SCREEN_BACKGROUND,
  },
  navigationHeaderContainer: {
    flexDirection: 'row',
    padding: PADDING_MEDIUM,
    alignItems: 'center',
    backgroundColor: COLOR_SCREEN_BACKGROUND,
  },
  backButtonContainer: {
    paddingRight: PADDING_MEDIUM,
  },
  buttonsListContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
  },
  navigationHeaderText: {
    fontSize: SIZE_TITLE,
    color: COLOR_TEXT_NORMAL,
    marginLeft: PADDING_MEDIUM,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: PADDING_MEDIUM,
    padding: PADDING_SMALL,
    marginVertical: PADDING_SMALL,
    marginHorizontal: PADDING_SMALL,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: SIZE_TITLE,
    color: COLOR_TEXT_NORMAL,
    marginRight: PADDING_SMALL,
  },
  videoListContainer: {
    height: VIDEOS_LIST_HEIGHT,
    backgroundColor: COLOR_YOUTUBE,
  },
});

export default styles;
