import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Drink from './components/Drink'

const App = () => {
  const [drinks, setDrinks] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPrice, setNewPrice ] = useState('')
  const [ newRate, setNewRate ] = useState('')
  const [ newPlace, setNewPlace ] = useState('')
  const [ newCategory, setNewCategory ] = useState('')
  const [ newMemo, setNewMemo ] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/drinks')
      .then(response => {
        console.log('promise fulfilled')
        setDrinks(response.data)
      })
  }
  
  useEffect(hook, [])
  
  console.log('render', drinks.length, 'drinks')
  const rows = () => drinks.map(drink =>
    <Drink
      key={drink.id}
      drink={drink}
    />
  )

  const sendDrink = (drink) => {
    console.log('送ったるやん: ', drink)
    axios
    .post('http://localhost:3001/drinks', drink)
    // .post('http://localhost:3001/drinks', drink)
    .then(response => {
      console.log(response)
      setDrinks(drinks.concat(drink))
    })
  }

  const add = (event) => {
    event.preventDefault()
    const drinkObject = {
      id: drinks.length + 1,
      name: newName,
      price: Number(newPrice),
      rate: Number(newRate),
      place: newPlace,
      category: newCategory,
      memo: newMemo
    }
    sendDrink(drinkObject)
    // setDrinks(drinks.concat(drinkObject)) // もしputで全部更新をするならこっち
    setNewName("")
    setNewPrice("")
    setNewRate("")
    setNewPlace("")
    setNewCategory("")
    setNewMemo("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value)
  }

  const handleRateChange = (event) => {
    setNewRate(event.target.value)
  }
  
  const handlePlaceChange = (event) => {
    setNewPlace(event.target.value)
  }
  
  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value)
  }
  
  const handleMemoChange = (event) => {
    setNewMemo(event.target.value)
  }

  return (
    <div>
      <form onSubmit={add}>
         <div>
          name: <input value={newName} onChange={handleNameChange}/>
         </div>
         <div>
          price: <input value={newPrice} onChange={handlePriceChange}/>
         </div>
         <div>
          rate: <input value={newRate} onChange={handleRateChange}/>
         </div>
         <div>
          place: <input value={newPlace} onChange={handlePlaceChange}/>
         </div>
         <div>
          category: <input value={newCategory} onChange={handleCategoryChange}/>
         </div>
         <div>
          memo: <input value={newMemo} onChange={handleMemoChange}/>
         </div>
         <div>
           <button type="submit">add</button>
         </div>
       </form>
      <h1>Drinks</h1>
        {rows()}
    </div>
  )
}

export default App