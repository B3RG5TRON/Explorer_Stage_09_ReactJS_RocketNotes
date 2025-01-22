import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-stage-08-nodejs-rocketnotes-api.onrender.com"
})