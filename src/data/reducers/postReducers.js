import { NEW_POST } from "../actions/newPost.actions";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};

export default postReducer;
