import { Link } from 'react-router-dom'
import estrelaPng from '../../assets/images/star_svg.svg'

import Tag from '../Tag'

import { Card, CardHeader, Title, Description, Infos } from './styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Product = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo,
  destacado
}: Props) => (
  <Card>
    <img className="card-image" src={capa} alt={titulo} />
    <Infos>
      {destacado ? <Tag>Destaque da semana</Tag> : ''}
      <Tag>{tipo}</Tag>
    </Infos>
    <div className="card-container">
      <CardHeader>
        <Title>{titulo}</Title>
        <Title>
          {avaliacao}
          <img className="star" src={estrelaPng} />
        </Title>
      </CardHeader>
      <Description>{descricao}</Description>
      <Link to="/perfil">
        <Tag>Saiba mais</Tag>
      </Link>
    </div>
  </Card>
)

export default Product
