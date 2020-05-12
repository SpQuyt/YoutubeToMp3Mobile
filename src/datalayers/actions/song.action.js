import { songAction } from 'constants/actions';
import MusicFiles from 'react-native-get-music-files';

export const getAllSongsDispatch = () => ({
  type: songAction.GET_ALL_SONGS_LIST,
  promise: MusicFiles.getAll({
    blured: true,
    artist: true,
    duration: true,
    genre: true,
    title: true,
    cover: true,
    minimumSongDuration: 10000,
  }),
});

export const getOnDeviceSongsDispatch = () => ({
  type: songAction.GET_ON_DEVICE_SONGS_LIST,
  promise: MusicFiles.getAll({
    blured: true,
    artist: true,
    duration: true,
    genre: true,
    title: true,
    cover: true,
    minimumSongDuration: 10000,
  }),
});
