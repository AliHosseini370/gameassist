import React from 'react'
import {Home, NavBar, Register, Login, Dota2, Csgo } from './Components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPage from './Components/ProductPage'

const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dota2' element={<Dota2 />} />
          <Route path='/csgo' element={<Csgo />} />
          <Route path='/dota2/:slug' element={<ProductPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App