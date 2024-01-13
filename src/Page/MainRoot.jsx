import React from 'react'
import Navbar from '../layout/Navbar'
import { Outlet } from 'react-router'
import Footer from '../layout/Footer'

function MainRoot() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRoot
