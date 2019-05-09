import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import reducers from '../reducers';

export default ({ children, initialState = {} }) => {
	const middleware = [
		reduxPromise
	].filter(i => i);

	const enhancer = compose(...[
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	].filter(i => i));


	const store = createStore(reducers, initialState, enhancer);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}