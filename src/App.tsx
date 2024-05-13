import { GlobalCss } from './styles'

import Hero from './components/Hero'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <div className="container">
        <ProductsList />
      </div>
    </>
  )
}

export default App
