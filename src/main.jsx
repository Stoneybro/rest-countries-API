import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {FetchProvider} from './context/Fetchprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/*' element={<App />} />
    </Routes>
    </BrowserRouter>
    </FetchProvider>
  </React.StrictMode>
)
