import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UtilsContextProvieder } from './context/UtilsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
    <UtilsContextProvieder>
       <App />
    </UtilsContextProvieder>
    </AuthProvider>
  </BrowserRouter>
)
