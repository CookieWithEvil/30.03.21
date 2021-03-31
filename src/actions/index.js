export const getFavoritesAC = () => {
  let favorites = []
  for (const [key, value] of Object.entries(localStorage)) {
    favorites.push({id: key, name: value})
  }
  return {
    type: 'FAVORITES_RECEIVED',
    favorites,
  }
}

export const getMoviesAC = () => {
  return function(dispatch) {
    dispatch({
      type: 'MOVIES_REQUESTED',
    });

  fetch('https://my-json-server.typicode.com/moviedb-tech/movies/list')
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: 'MOVIES_RECEIVED',
        movies: data
      })})
    .catch(error => dispatch({
        type: 'MOVIES_FAILED',
        movies: []
      })
    );
  }
}

export const addToFavoritesAC = movie => {
  localStorage.setItem(movie.id, movie.name)
  return {
    type: 'ADD_FAVORITE',
    id: movie.id,
    name: movie.name,
  }
}

export const removeFromFavoritesAC = id => {
  localStorage.removeItem(id)
  return {
    type: 'REMOVE_FAVORITE',
    id,
  }
}
