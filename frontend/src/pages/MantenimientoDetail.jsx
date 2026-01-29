import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'

const mantenimientosData = {
  'preventivo': {
    title: 'MANTENIMIENTO PREVENTIVO',
    description: 'Evita problemas antes de que ocurran',
    bannerImage: '/img/mantenimiento-preventivo.jpg',
    content: 'El mantenimiento preventivo es un conjunto de acciones planificadas y periódicas realizadas en equipos e instalaciones para evitar fallas. Este tipo de mantenimiento reduce los tiempos de inactividad, alarga la vida útil de los equipos y disminuye los costos operacionales.',
    benefits: [
      'Reduce el tiempo de inactividad',
      'Alarga la vida útil de equipos',
      'Disminuye costos de mantenimiento',
      'Mejora la seguridad operacional',
      'Aumenta la confiabilidad de equipos'
    ]
  },
  'correctivo': {
    title: 'MANTENIMIENTO CORRECTIVO',
    description: 'Soluciona problemas inmediatamente',
    bannerImage: '/img/mantenimiento-correctivo.jpg',
    content: 'El mantenimiento correctivo es la acción de reparación que se realiza después de que un equipo ha fallado. En ALCOINSAC ofrecemos servicio 24/7 de mantenimiento correctivo para minimizar los tiempos de parada y restaurar la operatividad de tus equipos lo más rápido posible.',
    benefits: [
      'Servicio 24/7 disponible',
      'Respuesta rápida a emergencias',
      'Técnicos especializados',
      'Diagnóstico preciso de fallas',
      'Reparaciones de calidad garantizada'
    ]
  },
  'predictivo': {
    title: 'MANTENIMIENTO PREDICTIVO',
    description: 'Predice fallas antes de que ocurran',
    bannerImage: '/img/mantenimiento-predictivo.jpg',
    content: 'El mantenimiento predictivo utiliza tecnologías avanzadas como análisis vibracional y termografía infrarroja para predecir fallas antes de que ocurran. Este enfoque permite programar el mantenimiento de forma óptima, evitando paradas no planificadas y reduciendo costos significativamente.',
    benefits: [
      'Predicción temprana de fallas',
      'Optimización de costos',
      'Planificación eficiente',
      'Tecnología avanzada de diagnóstico',
      'Máxima disponibilidad de equipos'
    ]
  }
}

export default function MantenimientoDetail() {
  const { tipoId } = useParams()
  const mantenimiento = mantenimientosData[tipoId]

  if (!mantenimiento) {
    return (
      <div className="container my-5">
        <h1>Tipo de mantenimiento no encontrado</h1>
        <p>El tipo de mantenimiento que buscas no existe.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Banner */}
      <Banner
        title={mantenimiento.title}
        imageSrc={mantenimiento.bannerImage}
      />

      {/* Contenido */}
      <main className="container my-5">
        <section className="row g-5 align-items-center">
          <div className="col-lg-8">
            <h2>{mantenimiento.title}</h2>
            <p className="lead mt-4">{mantenimiento.content}</p>
          </div>
          <div className="col-lg-4">
            <img src={mantenimiento.bannerImage} alt={mantenimiento.title} className="img-fluid rounded" />
          </div>
        </section>

        {/* Beneficios */}
        <section className="my-5 py-5">
          <div className="card-titulo p-3 text-center">
            <h2>BENEFICIOS</h2>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled">
                    {mantenimiento.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-3 fs-5">
                        <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-fondo)', marginRight: '10px' }}></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
