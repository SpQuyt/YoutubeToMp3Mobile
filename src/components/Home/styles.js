
import { StyleSheet } from 'react-native';
import {
  PADDING_MEDIUM, SCREEN_WIDTH, VIDEOS_LIST_HEIGHT,
  SEARCHBAR_CONTAINER_HEIGHT, SIZE_TEXT_SEARCHBAR, PADDING_SMALL,
} from 'constants/sizes';
import { COLOR_SEARCHBAR_CONTAINER } from 'constants/colors';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR_SEARCHBAR_CONTAINER,
    paddingVertical: PADDING_MEDIUM,
    paddingHorizontal: PADDING_SMALL,
    justifyContent: 'space-between',
    height: SEARCHBAR_CONTAINER_HEIGHT,
  },
  searchBar: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.7,
    fontSize: SIZE_TEXT_SEARCHBAR,
    paddingVertical: -PADDING_SMALL,
    paddingHorizontal: PADDING_SMALL,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cancelButtonContainer: {
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    paddingVertical: PADDING_SMALL,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cancelButtonText: {
    fontSize: SIZE_TEXT_SEARCHBAR,
  },
  findButton: {
    width: SCREEN_WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  noVideosContainer: {
    height: VIDEOS_LIST_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoListContainer: {
    height: VIDEOS_LIST_HEIGHT,
  },
});

export default styles;
