import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-center">
      <span className="logo">MixMaster</span>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/newsletter" className="nav-link">Newsletter</NavLink>
        <NavLink to="/cocktail" className="nav-link">Cocktail</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
