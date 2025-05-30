import React, { useState, useEffect } from 'react'

const Newsletter = () => {
  const [searchLetter, setSearchLetter] = useState('')
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    if (searchLetter) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`)
        .then((res) => res.json())
        .then((data) => {
          setCocktails(data.drinks || [])
        })
    }
  }, [searchLetter])

  return (
    <section>
      <form className="form">
        <h4>Subscribe to Newsletter</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Enter a letter"
             value={searchLetter}
          onChange={(e) => setSearchLetter(e.target.value)}
          maxLength="1"
          />
          <button type="submit" className="btn">Subscribe</button>
        </div>
      </form>
      <div className="cockx-tail-list">
        {cocktails.map((drink) => (
          <div key={drink.idDrink}>
            <h5>{drink.strDrink}</h5>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width="250" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Newsletter
