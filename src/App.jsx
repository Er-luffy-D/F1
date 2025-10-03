import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Player from "./pages/Player"
export const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home />} ></Route>
        <Route path='/agencies' element={<About />} ></Route>
        <Route path='/Players' element={<Player/>} ></Route>
      </Routes>
    </div>

  )
}
