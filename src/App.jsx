import './App.scss'
import React, { useEffect } from 'react'
import Gallery from './components/Gallery/Gallery'
import List from './components/List/List'

import { mapStateToProps } from './reducers/index'
import { useDispatch } from 'react-redux'
import { getMoviesAC } from './actions/index'

import { connect } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAC());
  }, [dispatch]);

  return (
    <div className="App">
      <Gallery />

      <List />
    </div>
  );
}

export default connect(mapStateToProps)(App)
