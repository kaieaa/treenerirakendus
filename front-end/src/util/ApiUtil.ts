import axios from 'axios';
import { stringify } from 'qs';


const API = axios.create({
  baseURL: 'http://localhost:3000/api', // API baasurl
  timeout: 10000,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
  withCredentials: true // true on vaja kui eri domeenil et cookied kaasa läheks. Vb vaja backendi poolel lubada ka.
});

export default API;
