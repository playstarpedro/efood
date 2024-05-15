import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
