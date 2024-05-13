import { GlobalCss } from './styles'

import Hero from './components/Hero'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <div className="container">
        <ProductsList />
      </div>
      <Footer />
    </>
  )
}

export default App
