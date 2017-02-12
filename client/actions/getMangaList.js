import axios from "axios";
import { LIST } from "../actions/types";

export default function getMangaList() {
  return dispatch => {
    // XMLHttpRequest cannot load https://www.mangaeden.com/api/list/0. Redirect from 'https://www.mangaeden.com/api/list/0' to 'http://www.mangaeden.com/api/list/0' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:5000' is therefore not allowed access.
    // so no https
    // p * 500 to (p + 1) * 500, manga
    return axios.get("http://www.mangaeden.com/api/list/0?p=0").then((obj) => {
      
      dispatch({
        type: LIST,
        list: obj
      });      
    });
  }
}
