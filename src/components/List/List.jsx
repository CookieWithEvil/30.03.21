import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers/index'
import { removeFromFavoritesAC } from '../../actions/index'
import './List.scss'

const List = ({movies, favorites, dispatch}) => {
  const removeFromFavorites = (movieId) => {
    dispatch(removeFromFavoritesAC(movieId))
  }

  return <div className="favorites">
    <h3 className="favorites__title">
        <div className="favorites__title-icon"/>
        Favorites List
    </h3>
    <ul className="favorites__list">
      {favorites.map(favorite => {return <li key={favorite.id} className="favorites__list-item">{favorite.name}
          <button
            className="favorites__list-item__remove-button"
            onClick={() => removeFromFavorites(favorite.id)}>
              X
          </button>
        </li>
      })}
    </ul>
  </div>
}

export default connect(mapStateToProps)(List)
