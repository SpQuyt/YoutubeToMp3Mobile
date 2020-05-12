
import { StyleSheet } from 'react-native';
import {
  VIDEOS_LIST_HEIGHT,
} from 'constants/sizes';
import { COLOR_YOUTUBE } from 'constants/colors';

const styles = StyleSheet.create({
  videoListContainer: {
    height: VIDEOS_LIST_HEIGHT,
    backgroundColor: COLOR_YOUTUBE,
  },
});

export default styles;
