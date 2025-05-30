import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section-center">
      <h2 className="title">404 - Page Not Found</h2>
      <div className="title-underline"></div>
      <p className="text">Sorry, the page you tried cannot be found.</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </section>
  )
}

export default Error
