import {ADD_FAVORITES, REMOVE_FAVORITES} from '../actions/favoritesAction';

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
}

export default favoritesReducer;
