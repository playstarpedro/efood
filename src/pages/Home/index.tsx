import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

import sushi from '../../assets/images/hioki_sushi.png'
import pasta from '../../assets/images/pasta.png'

export type Dish = {
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

// const dishs: Dish[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     rate: 4.9,
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//     image: sushi,
//     infos: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     rate: 4.6,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: pasta,
//     infos: ['Italiana']
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     rate: 4.6,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: pasta,
//     infos: ['Italiana']
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     rate: 4.6,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: pasta,
//     infos: ['Italiana']
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     rate: 4.6,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: pasta,
//     infos: ['Italiana']
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     rate: 4.6,
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: pasta,
//     infos: ['Italiana']
//   }
// ]

const Home = () => {
  const [dishs, setDishs] = useState<Dish[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDishs(res))
  }, [])

  return (
    <>
      <Hero />
      <div className="container">
        <ProductsList dishs={dishs} />
      </div>
      <Footer />
    </>
  )
}

export default Home
