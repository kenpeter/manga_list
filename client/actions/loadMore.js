// action type
import { MORE_LIST } from "../actions/types";

// create list
import { createList } from "../utils/func";

export default function loadMore() {
  return (dispatch, getState) => {
    // get current data
    let state = getState();
    
    //test
    //console.log("error?");
    //console.log(state);
    
    // state, reducer, then prop
    let list = state.loadMore.list;
    let tmpList;
    let pageNum = 0;
    let itemCount = 500;
  
    if(list.length == 0) {
      pageNum = 0;
    }
    else {
      // +1 means move to the next page
      pageNum = list.length / itemCount + 1;
    }
  
    // indicate loading more
    dispatch({
      type: MORE_LIST,
      loadingMore: true,
      list: list
    });
    
  
    // get old data and put more new data
    createList(pageNum).then(function(obj) {
      //console.log("-- start --");
      //console.log(obj.data.manga);
      
      // http://www.w3schools.com/jsref/jsref_concat_array.asp
      tmpList = list.concat(obj.data.manga);
      
      // list is increased.
      dispatch({
        type: MORE_LIST,
        loadingMore: false,
        list: tmpList
      });
      
    });
    
  }
}


