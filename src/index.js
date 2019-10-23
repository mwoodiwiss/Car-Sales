import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import Reducer from './reducers/Reducer';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(Reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,
rootElement);
