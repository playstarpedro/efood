import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

import sushi from '../../assets/images/hioki_sushi.png'
import pasta from '../../assets/images/pasta.png'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Hero />
      <div className="container">
        <ProductsList restaurants={restaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
