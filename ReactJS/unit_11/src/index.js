import React from 'react'
import './index.css'
import App from './components/App'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import initialState from './store/initialState'
import { createStore } from 'redux'

const store = createStore(rootReducer, initialState)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
