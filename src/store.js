import { createStore } from 'redux';

const initialState = {
    likes: [],
    dislikes: [],
    bookmarks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE":
        console.log('LIKE', action.data);
        return {
          ...state,
          count: state.count + 1
        };
      case "DISLIKE":
        console.log('DISLIKE', action.data);
        return {
          ...state,
          count: state.count - 1
        };
      case "BOOKMARK":
        console.log('BOOKMARK', action.data);
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