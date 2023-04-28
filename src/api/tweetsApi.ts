import axios from 'axios';
import { ITweetItem } from '../shared/types/TweetItem.interface';

axios.defaults.baseURL = 'https://644a5e77a8370fb3214c70c9.mockapi.io';

export const tweetsApi = {
  getTweets: async () => {
    const { data } = await axios.get('/users');

    return data;
  },
  updateTweet: async (tweet: ITweetItem) => {
    const { data } = await axios.put(`/users/${tweet.id}`, tweet);

    return data;
  },
};
