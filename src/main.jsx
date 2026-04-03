import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import GlobalStyles from './styles/globalStyles.jsx'
import initNonDraggable from './utils/nonDraggable.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
initNonDraggable()
