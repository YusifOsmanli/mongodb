import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='header__all'>
      <span><Link to="/"style={{textDecoration:"none", color:"white "}}  >Home</Link> </span>
      <span><Link to="/Basket" style={{textDecoration:"none", color:"white"}}> Basket</Link></span>
    </div>
  )
}

export default Navbar
