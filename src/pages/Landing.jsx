import React from 'react'
import { Outlet } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div>Landing</div>
      <Outlet/>
    </>
  )
}

export default Landing