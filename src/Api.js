import axios from 'axios';

const myApi = axios.create({
  baseURL: `https://api.genshin.dev/characters/`
});

export default myApi;