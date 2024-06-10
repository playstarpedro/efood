import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (!isLoading && restaurants !== undefined) {
    return (
      <>
        <Hero />
        <div className="container">
          <ProductsList restaurants={restaurants} />
        </div>
        <Footer />
      </>
    )
  } else {
    return <h3>Carregando...</h3>
  }
}

export default Home
