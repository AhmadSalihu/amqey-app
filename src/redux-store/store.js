import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducers from './root-reducers'; 


// const ReduxThunk = window.ReduxThunk.default;


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default  (store, persistor);

