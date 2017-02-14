import { MORE_LIST } from "../actions/types";

const initState = {
  loadingMore: false,
  list: []
};

// able to fire
export default function loadMore(state = initState, action = {}) {
  switch(action.type) {
  
    case MORE_LIST:
      return {
        loadingMore: action.loadingMore,
        list: action.list
      }
    
    default:
      return state;
  }
}




