import _ from 'lodash';
import axios from "axios";

// clone the array
export function createList(page=0) {
  // 500 items as a single page
  let apiUrl = "http://www.mangaeden.com/api/list/0?p=" + page;
  
  return axios.get(apiUrl);
}
