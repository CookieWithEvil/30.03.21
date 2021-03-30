import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers/index'
import thunk from 'redux-thunk';
import App from './App'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
