//action types
export const NEW_POST = "NEW_POST";

//action creator

export const addNewPost = (newPost) => ({
  type: NEW_POST,
  payload: newPost,
});
