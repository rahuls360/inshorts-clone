import { createStore } from 'redux';

const initialState = {
    likes: [],
    dislikes: [],
    bookmarks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIKE":
        // if id doesn't exist in likes - add to likes, remove from dislikes (if it exists in dislikes)
        if(state.likes.includes(action.data) === false){
          let dislikes = state.dislikes;
          if(state.dislikes.includes(action.data)){
            dislikes = [...state.dislikes];
            let index = dislikes.findIndex(id => id === action.data);
            dislikes.splice(index, 1);
          }
          return {
            ...state,
            likes: [...state.likes, action.data],
            dislikes
          };
        }else {
          return state;
        }
      case "DISLIKE":
        // if id doesn't exist in dislikes - add to dislikes, remove from likes (if it exists in likes)
        if(state.dislikes.includes(action.data) === false){
          let likes = state.likes;
          if(state.likes.includes(action.data)){
            likes = [...state.likes];
            let index = likes.findIndex(id => id === action.data);
            likes.splice(index, 1);
          }
          return {
            ...state,
            likes,
            dislikes: [...state.dislikes, action.data]
          };
        }else {
          return state;
        }
      case "BOOKMARK":
        // if id doesn't exist in bookmarks - add to bookmarks, otherwise remove it from bookmarks
        if(state.bookmarks.includes(action.data) === false){
          return {
            ...state,
            bookmarks: [...state.bookmarks, action.data]
          };
        }else {
          let bookmarks = [...state.bookmarks]
          let index = bookmarks.findIndex(id => id === action.data);
          bookmarks.splice(index, 1);
          return {
            ...state,
            bookmarks
          }
        }
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  export default store;