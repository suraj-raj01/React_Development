import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import ColorContext from './ColorContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorContext>
    <App />
  </ColorContext>,
)
