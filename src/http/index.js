import axios from "axios";

export const baseUrl = "https://pokeapi.co/api/v2";

const http = axios.create({
  baseURL: baseUrl,
});

export default http;