import { CoverImage, DishNationality, DishName } from './styles'
import presentationImage from '../../assets/images/presentation.png'

export type Props = {
  restaurants: Restaurant[]
  menuId: number
}

const Presentation = ({ restaurants, menuId }: Props) => {
  const restaurantInfos = restaurants[menuId]

  if (restaurantInfos !== undefined) {
    return (
      <CoverImage style={{ backgroundImage: `url(${presentationImage})` }}>
        <div className="container">
          <DishNationality>{restaurantInfos.tipo}</DishNationality>
          <DishName>{restaurantInfos.titulo}</DishName>
        </div>
      </CoverImage>
    )
  } else {
    return <h1>Carregando</h1>
  }
}

export default Presentation
