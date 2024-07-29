import { call, put, takeEvery } from 'redux-saga/effects';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import {
  ADD_NEW_POST_REQUEST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/posts.actions';

function* addNewPostSaga(action) {
  try {
    const { payload } = action;
    const docRef = yield call(() => addDoc(collection(db, 'posts'), payload));
    yield put({ type: ADD_NEW_POST_SUCCESS, payload: { id: docRef.id, ...payload } });
  } catch (error) {
    yield put({ type: ADD_NEW_POST_FAILURE, payload: error.message });
  }
}

function* fetchPostsSaga() {
  try {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const querySnapshot = yield call(getDocs, q);
    const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

function* watchPostSagas() {
  yield takeEvery(ADD_NEW_POST_REQUEST, addNewPostSaga);
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default watchPostSagas;
