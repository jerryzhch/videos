import axios from "axios";

const API_KEY = "AIzaSyD8HriZtLV3xSc6hME-1NMk30FVPCvwTi8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
