import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default instance; //when we use default it doesn't matter what name we use.