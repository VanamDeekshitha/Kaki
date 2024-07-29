export const ADD_NEW_POST_REQUEST = 'ADD_NEW_POST_REQUEST';
export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS';
export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const addNewPostRequest = (post) => ({
  type: ADD_NEW_POST_REQUEST,
  payload: post,
});

export const addNewPostSuccess = (post) => ({
  type: ADD_NEW_POST_SUCCESS,
  payload: post,
});

export const addNewPostFailure = (error) => ({
  type: ADD_NEW_POST_FAILURE,
  payload: error,
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
