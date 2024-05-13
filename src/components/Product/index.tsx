import estrelaPng from '../../assets/images/star_svg.svg'

import Tag from '../Tag'

import { Card, CardHeader, Title, Description, Infos } from './styles'

type Props = {
  title: string
  rate: number
  description: string
  image: string
  infos: string[]
}

const Product = ({ title, rate, description, image, infos }: Props) => (
  <Card>
    <img className="card-image" src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="card-container">
      <CardHeader>
        <Title>{title}</Title>
        <Title>
          {rate}
          <img className="star" src={estrelaPng} />
        </Title>
      </CardHeader>
      <Description>{description}</Description>
      <Tag>Saiba mais</Tag>
    </div>
  </Card>
)

export default Product
