import {
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/posts.actions';

const initialState = {
  posts: [],
  error: null,
  loading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ADD_NEW_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
