import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { rootReducer } from './root-reducer';
import { createStoreHook } from 'react-redux';
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE && compose;

export const store = createStoreHook(
	rootReducer,
	composeEnhancers(
		applyMiddleware(
			thunk.withExtraArgument({
				client: axios,
				api,
			})
		)
	)
);
