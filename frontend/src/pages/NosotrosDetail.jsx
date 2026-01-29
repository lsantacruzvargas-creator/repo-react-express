import React from 'react'
import { useParams } from 'react-router-dom'
import CardMVV from '../components/CardMVV'

const nosotrosData = {
  'mision': {
    title: 'MISIÓN',
    content: 'Proporcionar servicios de mantenimiento industrial de calidad superior para optimizar el desempeño de la maquinaria industrial, utilizando tecnología de punta y personal altamente capacitado, garantizando la excelencia en cada intervención.',
    image: '/img/mision.jpg'
  },
  'vision': {
    title: 'VISIÓN',
    content: 'Ser la empresa líder en soluciones de mantenimiento industrial en la región, reconocida por nuestra excelencia técnica, innovación continua, y compromiso con la satisfacción del cliente. Aspiramos a ser el socio estratégico preferido en la industria.',
    image: '/img/vision.jpg'
  },
  'valores': {
    title: 'VALORES',
    content: 'Nuestros valores fundamentales son: Excelencia en la ejecución de nuestros servicios, Integridad en todas nuestras acciones, Responsabilidad con nuestros clientes y el ambiente, Innovación constante en nuestros procesos, y Compromiso inquebrantable con la satisfacción del cliente.',
    image: '/img/valores.jpg'
  }
}

export default function NosotrosDetail() {
  const { seccionId } = useParams()
  const seccion = nosotrosData[seccionId]

  if (!seccion) {
    return (
      <div className="container my-5">
        <h1>Sección no encontrada</h1>
        <p>La sección que buscas no existe.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Banner simple */}
      <div className="bannerWithout" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '4rem' }}>{seccion.title}</h1>
      </div>

      {/* Contenido */}
      <main className="container my-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-8">
            <h2 style={{ color: 'var(--color-fondo)', fontSize: '2.5rem' }}>{seccion.title}</h2>
            <p className="lead mt-4 lh-lg">{seccion.content}</p>
          </div>
          <div className="col-lg-4">
            <img src={seccion.image} alt={seccion.title} className="img-fluid rounded" />
          </div>
        </div>
      </main>
    </div>
  )
}
