export function getMoviesAC() {
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

export function changeByIdAC(id, movie, isFavorite) {
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...movie, isFavorite})
  };

  return function(dispatch) {
    dispatch({
      type: 'MOVIE_CHANGE',
    });

  fetch(`https://my-json-server.typicode.com/moviedb-tech/movies/list/` + id, requestOptions)
      .then(response => response.json())
      .then(data => {
        // dispatch(getMoviesAction()) //BACKEND ISN'T UPDATING
        return dispatch({
          type: 'CHANGED_MOVIES',
          movie: {...movie, isFavorite},
        })
      })
      .catch(error => dispatch({
          type: 'CHANGE_MOVIES_FAILED',
          movie: movie
        })
      )
    }
}
