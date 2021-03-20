import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

const apiTrinus = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
  : `api.example.com`;

  
const api = axios.create({
  baseURL: "http://" + apiTrinus,
});


export default api;
