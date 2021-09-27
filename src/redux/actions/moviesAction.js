export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = moviesList => dispatch => {
  dispatch({
    type: GET_MOVIES,
    payload: moviesList,
  });
};
