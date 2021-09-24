import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import favoritesReducer from '../redux/reducers/favoritesReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  favoriteData: favoritesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
