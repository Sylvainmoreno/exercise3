export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const addFavorites = idFav => dispatch => {
  dispatch({
    type: ADD_FAVORITES,
    payload: idFav,
  });
};
export const removeFavorites = idFav => dispatch => {
  dispatch({
    type: REMOVE_FAVORITES,
    payload: idFav,
  });
};
