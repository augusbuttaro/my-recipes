import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import GlobalState from './context/global-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>
,
)
