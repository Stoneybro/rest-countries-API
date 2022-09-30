import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'


import Country from './pages/countrypage'
import Singlecountries from './pages/singlecountries'
import Layout from './pages/Layout'

import './App.css'


function App() {

  return (

<Routes>
  <Route path='/' element={<Layout />}>
    <Route index element={< Country />} />
    <Route path=':Country' element={<Singlecountries />} />

  </Route>
</Routes>

  )
}

export default App
