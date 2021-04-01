import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Popup from '../Popup/Popup'
import { mapStateToProps } from '../../reducers/index'
import { addToFavoritesAC, removeFromFavoritesAC } from '../../actions/index'
import './Gallery.scss'

const Gallery = ({genres, favorites, movies, dispatch}) => {
  const [isList, setIsList] = useState(false);
  const [shownMovie, showPopup] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [genre, setGenre] = useState();

  useEffect(() => {
    const displayedMovies = movies && movies.map(movie => {
      if(!genre || movie.genres.includes(genre)) {
      return <div
        key={movie.id}
        className={`gallery__movie movie ${isList ? 'list' : ''}`}
        onClick={() => showPopup(movie)}>

        <button
        className={`gallery__movie-label ${movie.isFavorite ? 'favorite' : ''}`}
        onClick={(event) => addToFavorites(event, movie)} />

        <div className="gallery__movie__image-container">
          <img className="gallery__movie__image-container-image" src={movie.img} alt="" />
        </div>

        <div className="gallery__movie-info">
          <p className="gallery__movie-info-text">
            {movie.name}
            {!isList && <br/ >}
            {movie.year}
          </p>

          {isList && <>
            <p className="gallery__movie-info-text">{movie.description}</p>
            <ul className="gallery__movie-info__genres">
            {movie.genres.map(genre =>
              <li key={genre} className="gallery__movie-info__genres-genre">{genre}</li>
            )}
            </ul>
          </>}
        </div>

      </div>
    } else {
      return null
    }
    })
    setDisplayedMovies(displayedMovies)
  }, [genre, movies])

  const addToFavorites = (event, movie) => {
    event.stopPropagation()
    if (movie.isFavorite) {
      dispatch(removeFromFavoritesAC(movie.id))
    } else {
      dispatch(addToFavoritesAC(movie))
    }
  }

  return <div className="gallery">
    <h3 className="gallery-title">Movies Gallery</h3>

    <div className="gallery__settings">
      <select
        name="genres"
        onChange={event => setGenre(event.target.value)}
        className="gallery__settings__genre-select"
      >
        <option value="" className="gallery__settings__genre-select-option">Select Genre</option>
        {genres.map(genre =>
          <option value={genre} key={genre} className="gallery__settings__genre-select-option">
            {genre}
          </option>
        )}
    </select>
      <div className="gallery__settings__view-as">View As:
        <button className="gallery__settings__view-as-card" onClick={() => setIsList(false)} />
        <button className="gallery__settings__view-as-list" onClick={() => setIsList(true)} />
      </div>
    </div>

    {
      displayedMovies
    }

    <Popup movie={shownMovie} showPopup={showPopup}/>
  </div>
}

export default connect(mapStateToProps)(Gallery)
