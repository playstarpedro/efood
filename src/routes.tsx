import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import RestaurantMenu from './pages/RestaurantMenu'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/menu" element={<RestaurantMenu />} />
  </Routes>
)

export default PageRoutes
