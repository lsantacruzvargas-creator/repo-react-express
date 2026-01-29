import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicioDetail from './pages/ServicioDetail'
import MantenimientoDetail from './pages/MantenimientoDetail'
import NosotrosDetail from './pages/NosotrosDetail'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rutas de servicios */}
        <Route path="/servicios/:servicioId" element={<ServicioDetail />} />
        
        {/* Rutas de mantenimientos */}
        <Route path="/mantenimientos/:tipoId" element={<MantenimientoDetail />} />
        
        {/* Rutas sobre nosotros */}
        <Route path="/nosotros/:seccionId" element={<NosotrosDetail />} />
        
        {/* Contacto */}
        <Route path="/contacto" element={<Contacto />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

function NotFound() {
  return (
    <div className="container my-5">
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
    </div>
  )
}

export default App
