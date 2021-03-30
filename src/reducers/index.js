const initialState = {
  movies: [],
}

export function mapStateToProps(state) {
  return state;
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGED_MOVIES': {
      const updMovieIndes = state.movies.findIndex(movie => movie.id === action.movie.id) //here id = arrIndex + 1, but in case it's not findIndex() is used
      const updMovies = [...state.movies]
      updMovies[updMovieIndes] = action.movie
      return {...state, movies: updMovies}
    }
    case 'MOVIES_RECEIVED': {
      return {...state, movies: action.movies}
    }
    default:
      return state
  }
}
