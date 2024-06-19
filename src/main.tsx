import "normalize.css"
import './index.css'

import App from './App.tsx'
import GlobalContextProvider from "context/GlobalContext.tsx"
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
)
