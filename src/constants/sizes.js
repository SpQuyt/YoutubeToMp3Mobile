import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
const RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const PADDING_SMALL = RATIO * 4;
export const PADDING_MEDIUM = RATIO * 7;
export const HEADER_HEIGHT = RATIO * 30;
export const SEARCHBAR_CONTAINER_HEIGHT = RATIO * 30;
export const VIDEOS_LIST_HEIGHT = SCREEN_HEIGHT - HEADER_HEIGHT * 2 - PADDING_MEDIUM - PADDING_SMALL;
export const SIZE_TITLE = RATIO * 12;
export const SIZE_TEXT_NORMAL = RATIO * 8;
export const SIZE_TEXT_DROPDOWN = RATIO * 8;
export const SIZE_AVATAR_SMALL = RATIO * 25;
export const SIZE_TITLE_VIDEO = RATIO * 9;
export const SIZE_TEXT_SEARCHBAR = RATIO * 8;
export const SIZE_DESCRIPTION_VIDEO = RATIO * 5;
export const RESULTS_PER_PAGE = 10;
