export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: DishType[]) => {
  return items.reduce((acumalator, currentItem) => {
    if (currentItem.preco) {
      return (acumalator += currentItem.preco)
    }
    return 0
  }, 0)
}
