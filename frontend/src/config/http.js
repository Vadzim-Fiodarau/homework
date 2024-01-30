import Axios from 'axios';

// See axios docs for usage, https://www.npmjs.com/package/axios
// Or, if you really hate it, swap it out here
const http = Axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  withCredentials: true,
});

export default http;
