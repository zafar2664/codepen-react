import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
//import { Provider } from "react-redux"

import { Provider } from 'react-redux'
import store from './Context/store.js'
//import CodepenSlice from './Context/CodepenSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
    
  </React.StrictMode>,
)