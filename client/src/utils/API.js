import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  saveBook: function(id) {
    return axios.insert("/api/books/" + id);
  }
};
