import { StyleSheet } from 'react-native';
import {
  HEADER_HEIGHT, SIZE_AVATAR_SMALL, SIZE_TITLE, PADDING_SMALL, PADDING_MEDIUM, SIZE_TEXT_DROPDOWN,
} from 'constants/sizes';
import { COLOR_HEADER, COLOR_TITLE, COLOR_DROPDOWN } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor: COLOR_HEADER,
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
  },
  dropDownContainer: {

  },
  dropDownMenu: {
    position: 'absolute',
    width: SIZE_AVATAR_SMALL * 1.2,
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
