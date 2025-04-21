import axios from "axios";

const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "73e4913183msh219d79c7fc23e3ap124356jsn0db34a90d2e5",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
});

export default api;
