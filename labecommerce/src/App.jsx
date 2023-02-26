
import { GlobalStyle, Container } from './Components/GlobalStyled'
import { ContainerLoja } from './Components/GlobalStyled'
import {Header} from './Components/Header/Header'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { productList } from './assets/productList'
import { useState } from 'react'


function App() {

  const [minFilter, setMinFilter] = useState('')

  const [maxFilter, setMaxFilter] = useState('max')

  const [searchFilter, setSearchFilter] = useState('')

  const [cart, setCart] = useState('')

  const [amount, setAmount] = useState('')







  return (
    <Container>
      <Header/>
      <GlobalStyle/>
      <ContainerLoja>
        <Filters />
        <Home productList={productList} />
        <Cart />
      </ContainerLoja>
      </Container>
      )
}

      export default App
