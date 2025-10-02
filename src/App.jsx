import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Agencies from "./pages/Agencies"
import Project from "./pages/Project"
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/agencies' element={<Agencies />} ></Route>
        <Route path='/projects' element={<Project/>} ></Route>
      </Routes>
    </div>

  )
}
