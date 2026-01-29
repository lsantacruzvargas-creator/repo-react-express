import React, { useState } from 'react'
import Banner from '../components/Banner'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí iría la lógica para enviar el formulario al backend
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
  }

  return (
    <div>
      {/* Banner */}
      <Banner
        title="CONTACTO"
        subtitle="¡Ponte en contacto con nosotros!"
        description="Estamos listos para ayudarte"
      />

      {/* Contenido */}
      <main className="container my-5">
        <div className="row g-5">
          {/* Información de contacto */}
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title mb-4">Información de Contacto</h3>
                
                <div className="mb-4">
                  <h5 className="mb-2">
                    <i className="bi bi-telephone me-2" style={{ color: 'var(--color-fondo)' }}></i>
                    Teléfono
                  </h5>
                  <p>
                    <a href="https://wa.me/51969585300" target="_blank" rel="noopener noreferrer">
                      +51 969585300
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="mb-2">
                    <i className="bi bi-envelope me-2" style={{ color: 'var(--color-fondo)' }}></i>
                    Correo Electrónico
                  </h5>
                  <p>
                    <a href="mailto:Ventas@alcoinsac.com">
                      Ventas@alcoinsac.com
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="mb-2">
                    <i className="bi bi-geo-alt me-2" style={{ color: 'var(--color-fondo)' }}></i>
                    Ubicación
                  </h5>
                  <p>Perú</p>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Síguenos en redes</h5>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Envíanos un mensaje</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'var(--color-fondo)', borderColor: 'var(--color-fondo)' }}>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
