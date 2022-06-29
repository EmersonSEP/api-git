import axios from "axios";


const baseAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type" : "application/json",
  },
});

export default baseAPI;