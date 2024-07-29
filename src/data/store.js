import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from '../data/reducers/postReducer';
import rootSaga from '../data/sagas/postsSaga'; // Make sure the path is correct

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    posts: postsReducer,
    // Add other reducers if needed
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
