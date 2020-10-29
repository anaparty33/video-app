import axios from "axios";
const KEY = "AIzaSyDtuLm2rsDa8AIJqglqFWkJzccLRfLspDE";
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

export default youtube;
