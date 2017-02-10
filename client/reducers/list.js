import { LIST } from "../actions/types";

const initState = {
  list: []
};


// able to fire
export default function list(state = initState, action = {}) {
  switch(action.type) {
  
    case LIST:
      return {
        list: action.list,
      }

    default:
      return state;
  }
}


