import { createStore } from 'redux';

const initialState = {
    likes: 0,
    dislikes: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE":
        return {
          ...state,
          count: state.count + 1
        };
      case "DISLIKE":
        return {
          ...state,
          count: state.count - 1
        };
      case "BOOKMARK":
        return {
          ...state,
          count: 0
        };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  export default store;