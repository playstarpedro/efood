import Product from '../Product'

import { Container, List } from './styles'

import hiokiSushi from '../../assets/images/hioki_sushi.png'
import vitaTrattoria from '../../assets/images/pasta.png'

const ProductsList = () => (
  <Container>
    <List>
      <Product
        title="Hioki Sushi"
        rate={4.9}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        image={hiokiSushi}
        infos={['Destaque da semana', 'Japonesa']}
      />
      <Product
        title="La Dolce Vita Trattoria"
        rate={4.6}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={vitaTrattoria}
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Trattoria"
        rate={4.6}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={vitaTrattoria}
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Trattoria"
        rate={4.6}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={vitaTrattoria}
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Trattoria"
        rate={4.6}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={vitaTrattoria}
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Trattoria"
        rate={4.6}
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={vitaTrattoria}
        infos={['Italiana']}
      />
    </List>
  </Container>
)

export default ProductsList
