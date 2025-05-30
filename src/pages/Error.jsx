import React from 'react'
import { Link,useRouteError} from 'react-router-dom'
import img from '../assets/Без названия (1).jpg'

const Error = () => {

  const error = useRouteError()
  if(error.status === 404) 
    return (
    <section className="section-center">
      <div className="title">
        <h2 className="title">404 - Page Not Found</h2>
        <div className="title-underline"></div>
      </div>
      <img src={img} alt="404" className="img" />
      <div className="title-underline"></div>
      <p className="text">Siz notogri yuldasiz</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </section>
  )
} 

export default Error
