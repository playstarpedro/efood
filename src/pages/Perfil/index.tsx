import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'

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
  const { id } = useParams()

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  const cardapios = restaurants.map((restaurante) => restaurante.cardapio)

  const parsedId = id ? parseInt(id, 10) : 1

  return (
    <>
      <Header />
      <Presentation restaurants={restaurants} menuId={parsedId} />
      <div className="container">
        <DishList menus={cardapios} menuId={parsedId} />
      </div>
      <Footer />
    </>
  )
}

export default Perfil
