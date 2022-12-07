import axios from 'axios';

const Api = axios.create({
  baseURL: `https://api.genshin.dev/characters/`
});

export default Api;