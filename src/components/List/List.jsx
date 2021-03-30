import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers/index'
import { changeByIdAC } from '../../actions/index'
import './List.scss'

const List = ({movies, dispatch}) => {
  const favorites = movies.filter(movie => movie.isFavorite)

  const removeFromList = (id, movie) => {
    dispatch(changeByIdAC(id, movie, false))
  }

    return <div className="favorites">
    <h3 className="favorites__title">
        <div className="favorites__title-icon"/>
        Favorites List
    </h3>
    <ul className="favorites__list">
      {favorites.map(favorite => {
        return <li key={favorite.id} className="favorites__list-item">{favorite.name}
          <button
            className="favorites__list-item__remove-button"
            onClick={(id) => removeFromList(favorite.id, favorite)}>
              X
          </button>
        </li>
      })}
    </ul>
    </div>
}

export default connect(mapStateToProps)(List)
