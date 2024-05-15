import { CoverImage, DishNationality, DishName } from './styles'
import presentationImage from '../../assets/images/presentation.png'

const Presentation = () => (
  <CoverImage style={{ backgroundImage: `url(${presentationImage})` }}>
    <div className="container">
      <DishNationality>Italiana</DishNationality>
      <DishName>La Dolce Vita Trattoria</DishName>
    </div>
  </CoverImage>
)

export default Presentation
