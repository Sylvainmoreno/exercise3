import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import favoritesReducer from '../redux/reducers/favoritesReducer';
import movieReducer from '../redux/reducers/movieReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  favoriteData: favoritesReducer,
  moviesData: movieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
