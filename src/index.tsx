import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer } from './store/reducers/user.reducer';
import { Provider } from 'react-redux';
import { counterReducer } from './store/reducers/counter.reducer';
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootSaga from './logic/sagas/root.saga';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counterReducer,
  router: connectRouter(history),
  userReducer
});

/* tslint:disable:no-string-literal*/
const reduxDevTools =
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']();
/* eslint-enable */

const store = window['__REDUX_DEVTOOLS_EXTENSION__'] ? createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)), reduxDevTools)
) : createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history))));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
