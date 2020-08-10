import axios from "axios";

// creates an axios instance
const instance = axios.create({
  // sets the default url
  baseURL: "https://burger-builder-1ce5a.firebaseio.com/",
});

export default instance;
