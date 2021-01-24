import axios from 'axios';

const KEY = 'AIzaSyBHf3Zj4hBynRrV8KYnwfeLx5YQFgYJyuI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
