import { StyleSheet } from 'react-native';
import {
  HEADER_HEIGHT, SIZE_AVATAR_SMALL, SIZE_TITLE, PADDING_SMALL, PADDING_MEDIUM, SIZE_TEXT_DROPDOWN,
} from 'constants/sizes';
import { COLOR_TITLE, COLOR_DROPDOWN, COLOR_YOUTUBE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor: COLOR_YOUTUBE,
    padding: PADDING_MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  name: {
    fontSize: SIZE_TITLE,
    color: COLOR_TITLE,
    fontWeight: 'bold',
  },
  avatar: {
    height: SIZE_AVATAR_SMALL,
    width: SIZE_AVATAR_SMALL,
    borderRadius: SIZE_AVATAR_SMALL / 2,
    borderColor: COLOR_YOUTUBE,
  },
  dropDownContainer: {
    alignItems: 'flex-end',
    width: SIZE_AVATAR_SMALL + PADDING_MEDIUM,
  },
  dropDownMenu: {
    position: 'absolute',
    width: SIZE_AVATAR_SMALL + PADDING_MEDIUM * 2,
    top: SIZE_AVATAR_SMALL,
    backgroundColor: COLOR_DROPDOWN,
    padding: PADDING_SMALL,
    borderRadius: 5,
  },
  dropDownItemText: {
    fontSize: SIZE_TEXT_DROPDOWN,
  },
});

export default styles;
