import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FromStatusContextProvider from './context/FormStatusContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FromStatusContextProvider>
    <App />
  </FromStatusContextProvider>,
)
