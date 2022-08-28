import axios from "axios";

const Api = axios.create({
  baseURL: `http://localhost:5001/api/v1`,
  timeout: 10000,
  params: {},
});

export default Api;
