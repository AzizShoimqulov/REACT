import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <section className="section-center">
      <h2 className="title">About Us</h2>
      <div className="title-underline"></div>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit tenetur vero obcaecati repellat, dolor minima dolorum sint voluptates modi enim repudiandae recusandae placeat quam nam dignissimos, alias eos debitis a.
      </p>
      <Outlet />
    </section>
  )
}

export default About
