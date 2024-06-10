import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'

import DishList from '../../components/DishList'

import {
  useGetRestaurantId1Query,
  useGetRestaurantId2Query,
  useGetRestaurantId3Query,
  useGetRestaurantId4Query,
  useGetRestaurantId5Query,
  useGetRestaurantId6Query
} from '../../services/api'

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
  const { data: restaurant1 } = useGetRestaurantId1Query()
  const { data: restaurant2 } = useGetRestaurantId2Query()
  const { data: restaurant3 } = useGetRestaurantId3Query()
  const { data: restaurant4 } = useGetRestaurantId4Query()
  const { data: restaurant5 } = useGetRestaurantId5Query()
  const { data: restaurant6 } = useGetRestaurantId6Query()

  let selectedRestaurant = restaurant1

  switch (id) {
    case '0': {
      selectedRestaurant = restaurant1
      break
    }
    case '1': {
      selectedRestaurant = restaurant2
      break
    }
    case '2': {
      selectedRestaurant = restaurant3
      break
    }
    case '3': {
      selectedRestaurant = restaurant4
      break
    }
    case '4': {
      selectedRestaurant = restaurant5
      break
    }
    case '5': {
      selectedRestaurant = restaurant6
      break
    }
  }

  // console.log(selectedRestaurant)

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  const parsedId = id ? parseInt(id, 10) : 1

  if (selectedRestaurant !== undefined) {
    return (
      <>
        <Header />
        <Presentation restaurants={restaurants} menuId={parsedId} />
        <div className="container">
          <DishList selectedRestaurant={selectedRestaurant} />
        </div>
        <Footer />
      </>
    )
  } else {
    return <h3>Carregando...</h3>
  }
}

export default Perfil
