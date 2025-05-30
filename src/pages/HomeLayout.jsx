import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <nav>
      <h2>Navbar</h2>
    </nav>
      <Outlet/>
    <footer>
      <h2>Footer</h2>
    </footer>
    </>
  )
}

export default HomeLayout