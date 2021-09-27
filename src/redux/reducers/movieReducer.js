import {GET_MOVIES} from '../actions/moviesAction';

const initialState = {
  movies: [],
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: [...state.movies, action.payload]};
    default:
      return state;
  }
}

export default movieReducer;
