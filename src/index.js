import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import thunk from 'redux-thunk';
import { fetchWeatherData } from './actions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

//store.dispatch(fetchUserLocation());
store.dispatch(fetchWeatherData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();