import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="textInline list-inline" style={{ backgroundColor: 'skyblue', width: '100%', height: '20px', zIndex: 10, position: 'relative' }}>
        {/* Contacto info hidden on mobile - can be re-added */}
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/img/Logo_pequeño.png" alt="logo" className="imagen_logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav nav-underline">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/servicios/rebobinado-de-motores">Reparación de motores eléctricos</Link></li>
                  <li><Link className="dropdown-item" to="/servicios/alineacion-de-motores">Alineación laser de ejes y poleas</Link></li>
                  <li><Link className="dropdown-item" to="/servicios/sistema-de-pozo-a-tierra">Sistemas de pozo a tierra</Link></li>
                  <li><Link className="dropdown-item" to="/servicios/analisis-vibracional">Análisis vibracional</Link></li>
                  <li><Link className="dropdown-item" to="/servicios/analisis-termografico">Análisis termográfico</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mantenimientos
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/mantenimientos/preventivo">Preventivo</Link></li>
                  <li><Link className="dropdown-item" to="/mantenimientos/correctivo">Correctivo</Link></li>
                  <li><Link className="dropdown-item" to="/mantenimientos/predictivo">Predictivo</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sobre Nosotros
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/nosotros/mision">Misión</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/vision">Visión</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/valores">Valores</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
