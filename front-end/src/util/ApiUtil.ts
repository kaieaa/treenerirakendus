import axios from 'axios';
import { stringify } from 'qs';


const API = axios.create({
  baseURL: 'http://localhost:3000/api', // API baasurl
  timeout: 10000,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
  withCredentials: true // true on vajalik, et cookied kaasa läheks.
});

export default API;
