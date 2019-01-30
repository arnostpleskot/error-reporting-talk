import { createStore, applyMiddleware } from 'redux'
import * as Sentry from "@sentry/browser";
import createSentryMiddleware from "redux-sentry-middleware";

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'SET':
      throw Error('Some bad redux error');
    default:
      return state
  }
}

let store = createStore(counter,
  applyMiddleware(createSentryMiddleware(Sentry))
);


store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'SET'});
