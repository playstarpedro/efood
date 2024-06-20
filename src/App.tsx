import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import PageRoutes from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <PageRoutes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
