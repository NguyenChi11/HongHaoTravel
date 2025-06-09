import ReactDOM from 'react-dom/client';
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from './page/Home/Home.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </BrowserRouter>
)

