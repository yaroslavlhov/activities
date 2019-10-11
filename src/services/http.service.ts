import axios from 'axios';

const http = axios.create();

http.defaults.baseURL = 'http://www.boredapi.com/';

export default http;
