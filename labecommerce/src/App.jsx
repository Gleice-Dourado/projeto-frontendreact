import { useState } from 'react'
import './App.css'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/home/Home'
import { Cart } from './Components/ShoppingCart/Cart/Cart'


function App() {

  return (
    <div className="App">
      <Filters/>
      <Home/>
      <Cart/>
      
    </div>
  )
}

export default App
