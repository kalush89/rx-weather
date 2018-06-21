import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const middleware = [ thunk ]
		if (process.env.NODE_ENV !== 'production') {
  			middleware.push(createLogger())
		}


	const store = createStore(
  		rootReducer,
		initialState,
  	applyMiddleware(...middleware)
	);

	

	return store;
}
