import { StyleSheet } from 'react-native';
import {
  PADDING_SMALL, SCREEN_WIDTH,
  SIZE_DESCRIPTION_VIDEO, SIZE_TITLE_VIDEO, PADDING_MEDIUM, SCREEN_HEIGHT, SIZE_AVATAR_SMALL, SIZE_TITLE_SONG, SIZE_AUTHOR_SONG,
} from 'constants/sizes';
import { COLOR_BACKGROUND_VIDEO_ITEM, COLOR_SCREEN_BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  songContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR_BACKGROUND_VIDEO_ITEM,
    padding: PADDING_SMALL,
    alignItems: 'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  cover: {
    width: SIZE_AVATAR_SMALL,
    aspectRatio: 1,
  },
  textContainer: {
    marginLeft: PADDING_SMALL,
    width: SCREEN_WIDTH * 0.7,
  },
  titleText: {
    fontSize: SIZE_TITLE_SONG,
    fontWeight: 'bold',
    marginBottom: PADDING_MEDIUM,
  },
  authorText: {
    fontSize: SIZE_AUTHOR_SONG,
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
