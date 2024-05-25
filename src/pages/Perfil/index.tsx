import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'

import { Restaurant } from '../Home'
import DishList from '../../components/DishList'

export type Dishes = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  const [dishes, setDishes] = useState<Dishes[]>([])

  // Suponha que "restaurants" contenha os dados da API conforme mostrado na sua pergunta
  const cardapios = restaurants.map((restaurante) => restaurante.cardapio)

  // Define a variável de estado "dishs" com os cardápios
  // setDishs(allDishs)

  // console.log(cardapios)

  return (
    <>
      <Header />
      <Presentation />
      <div className="container">
        <DishList dishes={cardapios} />
      </div>
      <Footer />
    </>
  )
}

export default Perfil
