const initialState = {
  genres: [],
  movies: [],
  favorites: [],
}

export const mapStateToProps = (state) => {
  return state;
}

const getAllGenres = (movies) => {
  let genres = []
  movies.forEach((movie, i) => {
    genres = [...genres, ...movie.genres]
  });
  return [...new Set(genres)] // removes dublicates from array (source: https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIES_RECEIVED': {
      const newMovies = [...action.movies]
      state.favorites.forEach(favorite => {
        let movieIndex = newMovies.findIndex(movie => movie.id == favorite.id)
        if (movieIndex > -1) newMovies[movieIndex]['isFavorite'] = true
      })
      const genres = getAllGenres(action.movies)
      return {...state, movies: newMovies, genres}
    }
    case 'FAVORITES_RECEIVED': {
      return {...state, favorites: action.favorites}
    }
    case 'ADD_FAVORITE': {
      const newFavorites = [...state.favorites]
      newFavorites.push({id: action.id, name: action.name})

      const movieIndex = state.movies.findIndex(movie => movie.id === action.id) //here id = arrIndex + 1, but in case it's not findIndex() is used
      const newMovies = [...state.movies]
      newMovies[movieIndex]['isFavorite'] = true

      return {...state, movies: newMovies, favorites: newFavorites}
    }
    case 'REMOVE_FAVORITE': {
      const newFavorites = [...state.favorites]
      const removeIndex = state.favorites.findIndex(favorite => favorite.id === action.id)
      newFavorites.splice(removeIndex, 1)

      const movieIndex = state.movies.findIndex(movie => movie.id === action.id) //here id = arrIndex + 1, but in case it's not findIndex() is used
      const newMovies = [...state.movies]
      newMovies[movieIndex]['isFavorite'] = false

      return {...state, movies: newMovies, favorites: newFavorites}
    }
    default:
      return state
  }
}
