import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import PageRoutes from './routes'
import { store } from './store'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <PageRoutes />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
