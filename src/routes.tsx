import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default PageRoutes
