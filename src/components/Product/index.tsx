import estrelaPng from '../../assets/images/star_svg.svg'

import Tag from '../Tag'

import { Card, CardHeader, Title, Description } from './styles'

const Product = () => (
  <Card>
    <img className="card-image" src="//placehold.it/472x217" />
    <div className="card-container">
      <CardHeader>
        <Title>Nome do prato</Title>
        <Title>
          4.6
          <img className="star" src={estrelaPng} />
        </Title>
      </CardHeader>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, soluta
        corrupti? Adipisci distinctio dignissimos ullam voluptas harum eveniet
        debitis veritatis beatae inventore soluta ipsam quibusdam itaque
        temporibus repudiandae, nesciunt officiis.
      </Description>
      <Tag>Saiba mais</Tag>
    </div>
  </Card>
)

export default Product
