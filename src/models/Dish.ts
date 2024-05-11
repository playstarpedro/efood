class Dish {
  image: string
  title: string
  rate: number
  infos: string[]
  description: string
  id: number

  constructor(
    image: string,
    title: string,
    rate: number,
    infos: string[],
    description: string,
    id: number
  ) {
    this.image = image
    this.title = title
    this.rate = rate
    this.infos = infos
    this.description = description
    this.id = id
  }
}

export default Dish
