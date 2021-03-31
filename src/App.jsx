import './App.scss'
import React, { useEffect } from 'react'
import Gallery from './components/Gallery/Gallery'
import List from './components/List/List'

import { useDispatch } from 'react-redux'
import { getMoviesAC, getFavoritesAC } from './actions/index'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesAC());
    dispatch(getMoviesAC());
  }, [dispatch]);

  return (
    <div className="App">
      <Gallery />

      <List />
    </div>
  );
}

export default App
