import { createStore } from 'redux';

const initialState = {
    likes: [],
    dislikes: [],
    bookmarks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE":
        if(state.likes.includes(action.data) === false){
          return {
            ...state,
            likes: [...state.likes, action.data]
          };
        }
      break;
      case "DISLIKE":
        if(state.dislikes.includes(action.data) === false){
          return {
            ...state,
            dislikes: [...state.dislikes, action.data]
          };
        }
      break;
      case "BOOKMARK":
        if(state.bookmarks.includes(action.data) === false){
          return {
            ...state,
            bookmarks: [...state.bookmarks, action.data]
          };
        }
      break;
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  export default store;