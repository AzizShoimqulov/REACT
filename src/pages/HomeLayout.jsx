import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const HomeLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(228, 183, 183);
  min-height: 100vh;
  padding: 20px;
`

export default HomeLayout
