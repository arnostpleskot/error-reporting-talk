import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as Sentry from '@sentry/browser'
import createSentryMiddleware from "redux-sentry-middleware";

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    console.error('Captured error', error);
    Sentry.captureException(error);
  }
});
// mount it on the Store
const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware, createSentryMiddleware(Sentry))
);

store.subscribe(() => console.log(store.getState()));


function* mySaga() {
  yield put({ type: 'INCREMENT' });
  yield put({ type: 'INCREMENT' });
  yield put({ type: 'INCREMENT' });
  yield put({ type: 'DECREMENT' });
  throw Error('Some bad saga error');
}

// then run the saga
sagaMiddleware.run(mySaga);
