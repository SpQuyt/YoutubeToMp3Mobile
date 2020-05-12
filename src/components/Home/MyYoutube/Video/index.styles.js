import { StyleSheet } from 'react-native';
import {
  PADDING_SMALL, SCREEN_WIDTH,
  SIZE_DESCRIPTION_VIDEO, SIZE_TITLE_VIDEO, PADDING_MEDIUM, SCREEN_HEIGHT,
} from 'constants/sizes';
import { COLOR_BACKGROUND_VIDEO_ITEM, COLOR_SCREEN_BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR_BACKGROUND_VIDEO_ITEM,
    padding: PADDING_SMALL,
    width: SCREEN_WIDTH,
    justifyContent: 'space-between',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
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
