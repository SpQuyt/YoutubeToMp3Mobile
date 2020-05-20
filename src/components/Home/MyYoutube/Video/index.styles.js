import { StyleSheet } from 'react-native';
import {
  PADDING_SMALL, SCREEN_WIDTH, SIZE_DESCRIPTION_VIDEO,
  SIZE_TITLE_VIDEO, PADDING_MEDIUM, SCREEN_HEIGHT,
} from 'constants/sizes';
import { COLOR_SCREEN_BACKGROUND, COLOR_BACKGROUND_VIDEO_ITEM } from 'constants/colors';

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: 'row',
    padding: PADDING_SMALL,
    width: SCREEN_WIDTH,
    justifyContent: 'space-between',
    backgroundColor: COLOR_BACKGROUND_VIDEO_ITEM,
  },
  thumbnail: {
    width: SCREEN_WIDTH * 0.5,
    aspectRatio: 3 / 2,
  },
  textContainer: {
    marginLeft: PADDING_SMALL,
    width: SCREEN_WIDTH * 0.45,
  },
  titleText: {
    fontSize: SIZE_TITLE_VIDEO,
    fontWeight: 'bold',
    marginBottom: PADDING_MEDIUM,
  },
  descriptionText: {
    fontSize: SIZE_DESCRIPTION_VIDEO,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_SCREEN_BACKGROUND,
    width: SCREEN_WIDTH - PADDING_SMALL * 2,
    marginLeft: -PADDING_SMALL,
    height: SCREEN_HEIGHT * 0.5,
  },
});

export default styles;
