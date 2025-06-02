import React, { useState, useEffect } from 'react'

const Newsletter = () => {
  const [searchLetter, setSearchLetter] = useState('')
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const letter = searchLetter || 'a'
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks || [])
      })
  }, [searchLetter])

  return (
    <section>
      <form className="form">
        <h4>Drink Search</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Enter a letter"
            value={searchLetter}
            onChange={(e) => setSearchLetter(e.target.value)}
            maxLength="1"
          />
        </div>
      </form>
      <div className="cockx-tail-list">
        {cocktails.map((drink) => (
          <div key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width="300" height={260} />
            <h3>{drink.strDrink}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Newsletter

