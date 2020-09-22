import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ewHTStGFKA4GZ3zTH_e7-dLuCLLCNGBKIAtejWe3mLA',
  },
});
