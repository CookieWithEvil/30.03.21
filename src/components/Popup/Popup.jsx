import React from 'react'
import './Popup.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../reducers/index'

const Popup = ({ movie, showPopup }) => {
  return (movie ? <div className="popup">
    <div className="popup__detail">
      <button className="popup__detail-close-button" onClick={() => showPopup(null)}>X</button>
      <img className="popup__detail__poster" src={movie.img} alt="poster"/>
      <div className="popup__detail__general"><h3>{movie.name}</h3><p>{movie.description}</p></div>
      <div className="popup__detail__other">
        <div className="popup__detail__other-row">
          <div className="popup__detail__other-row-icon"/>
          <p>{movie.year}</p>
        </div>

        <ul className="popup__detail__other__genres">
          {movie.genres.map(genre =>
              <li key={genre} className="popup__detail__other__genres-genre">{genre}</li>
          )}
        </ul>
        <ul className="popup__detail__other__cast">
          <li>Director: {movie.director}</li>
          <li>Starring: {movie.starring.join(', ')}</li>
        </ul>
      </div>
    </div>
  </div> : null)
}

export default connect(mapStateToProps)(Popup)
