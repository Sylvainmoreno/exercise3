const API_TOKEN = '55855f56e5cc6a0ed270d124c95e6ee7';

export const allPopularMovie = async () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}`,
    {
      method: 'GET',
      headers: {},
    },
  )
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
    });
};

export const movieCast = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_TOKEN}`,
    {
      method: 'GET',
      headers: {},
    },
  )
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
    });
};

export const getPosterMovies = image => {
  return `https://image.tmdb.org/t/p/w500${image}`;
};
