import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';


/**
 * Redux Setting
 */

// let middleware = [thunk];
// if (process.env.NODE_ENV === `development`) {
//   middleware.push(logger);
// }

// const persistedReducer = persistReducer(
//     //persistConfig, 
//     rootReducer
// );
// let reducers = combineReducers(rootReducer, persistConfig)
const store = legacy_createStore(
 rootReducer,
 applyMiddleware(thunk)
);
//const persistor = persistStore(store);

export {
 store,
 //persistor
};