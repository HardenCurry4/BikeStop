import React from 'react'
import ReactDOM from 'react-dom/client'
import { BikeStop } from './BikeStop'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BikeStop />
    </BrowserRouter>
  </React.StrictMode>,
)
