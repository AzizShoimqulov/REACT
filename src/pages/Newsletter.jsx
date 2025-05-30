import React from 'react'

const Newsletter = () => {
  return (
    <section className="">
      <form className="form">
        <h4>Subscribe to Newsletter</h4>
        <div className="form-control">
          <input
            type="email"
            className="form-input"
            placeholder="Enter email"
          />
          <button type="submit" className="btn">Subscribe</button>
        </div>
      </form>
    </section>
  )
}

export default Newsletter
