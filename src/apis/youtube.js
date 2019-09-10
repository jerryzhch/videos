import axios from "axios";

const KEY = "AIzaSyA67obTem5kInEpIzgl2C7IH2moY5VRJ0o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
