import { useState } from 'react'
import { GlobalStyle } from './Components/GlobalStyled'
import { ContainerLoja } from './Components/GlobalStyled'
import './App.css'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home'
import { Cart } from './Components/ShoppingCart/Cart/Cart'


function App() {

  return (
    <ContainerLoja>
      <GlobalStyle/>
      <Filters/>
      <Home/>
      <Cart/>
    </ContainerLoja>
  )
}

export default App
