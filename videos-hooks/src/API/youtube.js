import axios from 'axios';

const KEY = 'AIzaSyCXltD4VdIzXA8exJCUJOqO2E2wMvI2VWk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
