
import { StyleSheet } from 'react-native';
import {
  PADDING_MEDIUM, PADDING_HIGH, SIZE_TITLE_2, VIDEOS_LIST_HEIGHT, PADDING_SMALL,
} from 'constants/sizes';
import {
  COLOR_TITLE, COLOR_SCREEN_BACKGROUND, COLOR_YOUTUBE,
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
  navigationHeaderText: {
    fontSize: SIZE_TITLE_2,
    color: COLOR_TITLE,
    marginLeft: PADDING_HIGH,
  },
  shuffleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: PADDING_MEDIUM,
    padding: PADDING_SMALL,
    marginVertical: PADDING_MEDIUM,
    alignItems: 'center',
    alignSelf: 'center',
  },
  shuffleButtonText: {
    fontSize: SIZE_TITLE_2,
    color: COLOR_TITLE,
    marginRight: PADDING_MEDIUM,
  },
  videoListContainer: {
    height: VIDEOS_LIST_HEIGHT,
    backgroundColor: COLOR_YOUTUBE,
  },
});

export default styles;
