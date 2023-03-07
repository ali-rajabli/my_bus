import axios from "axios";

const api = axios.create({
  baseURL: "http://94.20.88.162:3000/v1.0",
});

export default api;
