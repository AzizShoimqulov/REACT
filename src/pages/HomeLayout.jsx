import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const HomeLayout = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Outlet/>
    
    </Wrapper>
  )
}
const Wrapper=styled.div`
  background-color:rgb(185, 30, 30);
  padding: 20px;
  margin: 20px;
`
export default HomeLayout