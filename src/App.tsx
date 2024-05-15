import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import PageRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
