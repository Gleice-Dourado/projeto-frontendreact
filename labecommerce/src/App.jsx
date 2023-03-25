import { GlobalStyle, Container } from './Components/GlobalStyled'
import { ContainerLoja } from './Components/GlobalStyled'
import { Header } from './Components/Header/Header'
import { Filters } from './Components/Filters/Filters'
import { Home } from './Components/ProductList/Home/Home'
import { Footer } from './Components/Footer/Footer'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { productList } from './assets/productList'
import { useEffect, useState } from 'react'



function App() {

  const [products, setProduct] = useState(productList)
  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [amount, setAmount] = useState(0)
  const [cart, setCart] = useState(
    //recupera dados da localStorage
    () => {
      const existingCart = JSON.parse(localStorage.getItem('cart'))
      return existingCart ? existingCart : []
    })
  const [cartVisible, setCartVisible] = useState(false)


  useEffect(() => {

    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString)

  }, [cart])


  //função que filtra os itens do array cart
  const filteredProducts = products.filter((product) => {
    //verificar primeiro as condicoes mais restritivas para evitar erros
    if (minFilter && maxFilter && searchFilter) {
      return product.value >= minFilter && product.value <= maxFilter && product.name.toLowerCase().includes(searchFilter.toLowerCase())
    }
    if (minFilter && maxFilter) {
      return product.value >= minFilter && product.value <= maxFilter
    }
    if (minFilter) {
      return product.value >= minFilter
    }
    if (maxFilter) {
      return product.value <= maxFilter
    }
    if (searchFilter) {
      return product.name.toLowerCase().includes(searchFilter.toLowerCase())
    }

    else {
      return product
    }

  })

  const toggleCart = (page) => {

    setCartVisible(!cartVisible)
    console.log(cartVisible)

  }


const renderCart = () => {
  if (cartVisible) {
    return <ContainerLoja>
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}

      />
      <Home
        filteredProducts={filteredProducts}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}

      />
      
      {cartVisible && 
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />}
    </ContainerLoja>
  } else {
    return <ContainerLoja>
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}

      />
      <Home
        filteredProducts={filteredProducts}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    </ContainerLoja>
  }
}



return (
  <>
    <GlobalStyle />
    <Container>
      <Header searchFilter={searchFilter}
        setSearchFilter={setSearchFilter} toggleCart={toggleCart} />

      {renderCart()}
      
      <Footer />
    </Container>
  </>
)
}

export default App
