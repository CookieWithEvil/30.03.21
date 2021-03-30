import React, { useState } from 'react'
import { connect } from 'react-redux'
import Popup from '../Popup/Popup'
import { mapStateToProps } from '../../reducers/index'
import { changeByIdAC } from '../../actions/index'
import './Gallery.scss'

const Gallery = ({favorites, movies, dispatch}) => {
  const [isList, setIsList] = useState(false);
  const [shownMovie, showPopup] = useState(null);

  const toggleToFavorites = (event, id, movie) => {
    event.stopPropagation()
    dispatch(changeByIdAC(id, movie, !movie.isFavorite))
  }

  return <div className="gallery">
    <h3 className="gallery-title">Movies Gallery</h3>
    {/*<div className="gallery__settings">
       <div className="genre-select">Select Genre</div>
      <div className="view-as">view as: <button className="card-view" onClick={() => setIsList(false)} /> <button className="list-view" onClick={() => setIsList(true)} /></div>
    </div>*/}
    {
      movies && movies.map(movie =>
        (<div key={movie.id} className={`gallery__movie movie ${isList ? 'list' : ''}`} onClick={() => showPopup(movie)}>
          <button className={`gallery__movie-label ${movie.isFavorite ? 'favorite' : ''}`} onClick={(event) => toggleToFavorites(event, movie.id, movie)} />
          <div className="gallery__movie__image-container">
            <img className="gallery__movie__image-container-image" src={movie.img} alt="" />
          </div>
          <p className="gallery__movie-info">{movie.name} <br/ >
          {movie.year}</p>
        </div>)
      )
    }

    <Popup movie={shownMovie} showPopup={showPopup}/>
  </div>
}

export default connect(mapStateToProps)(Gallery)
