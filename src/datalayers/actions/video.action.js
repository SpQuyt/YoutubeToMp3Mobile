import axios from 'axios';
import { videoAction } from 'constants/actions';
import { YOUTUBE_API } from 'constants/links';
import Auth from 'utils/auth';

export const getVideosListDispatch = (maxResults, queryString) => ({
  type: videoAction.GET_VIDEOS_LIST,
  promise: axios.get(`${YOUTUBE_API.searchAPI}?part=snippet&maxResults=${maxResults}&q=${queryString}&key=${YOUTUBE_API.apiKey}&type=video`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getAccessToken()}`,
      },
    }),
});

export const saveVideosListDispatch = (videosList) => ({
  type: videoAction.SAVE_VIDEOS_LIST,
  payload: {
    videosList,
  },
});
