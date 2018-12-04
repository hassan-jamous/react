import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { userReducer } from './store/reducers/user.reducer';
import { Provider } from 'react-redux';
import { counterReducer } from './store/reducers/counter.reducer';

const rootReducer = combineReducers({
  counterReducer,
  userReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
