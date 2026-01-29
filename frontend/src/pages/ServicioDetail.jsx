import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'

// Definir los datos de servicios
const serviciosData = {
  'rebobinado-de-motores': {
    title: 'REBOBINADO DE MOTORES',
    description: 'Servicio especializado de rebobinado de motores eléctricos',
    bannerImage: '/img/IMG_6312.jpg',
    sections: [
      {
        title: 'REBOBINADO DE MOTORES',
        content: 'Nuestro servicio de reparación y rebobinado está orientado a recuperar la operatividad completa de motores eléctricos industriales y equipos electromecánicos, respetando sus especificaciones técnicas originales. Trabajamos con motores de baja, media y alta tensión, y cada proceso es realizado por personal técnico especializado.',
        items: [
          'Rebobinado de motores AC',
          'Rebobinado de motores DC',
          'Rebobinado de todas las potencias'
        ],
        image: '/img/motor3.jpg'
      },
      {
        title: '¿EN QUE CONSISTE EL REBOBINADO DE MOTOR?',
        content: 'El rebobinado de motores en ALCOINSAC es un proceso de precisión que inicia con la evaluación del núcleo magnético y retiro del bobinado dañado. Nuestro protocolo incluye cálculo preciso del nuevo bobinado según especificaciones originales, prueba del núcleo magnético para detectar cortocircuitos, y rebobinado manual especializado con alambre doble esmalte de calidad clase H. Aplicamos doble barnizado aislante clase H con impregnación al vacío, seguido de tratamiento térmico en horno controlado entre 120-160°C para lograr la perfecta polimerización del barniz. El proceso culmina con pruebas de rigidez dieléctrica, medición de resistencia de aislamiento según IEEE 43-2000 y análisis de aceptación final antes de la entrega.',
        image: null
      }
    ]
  },
  'alineacion-de-motores': {
    title: 'ALINEACIÓN LASER DE EJES Y POLEAS',
    description: 'Alineación de precisión con tecnología láser',
    bannerImage: '/img/IMG_6312.jpg',
    sections: [
      {
        title: 'ALINEACIÓN LASER',
        content: 'Servicio de alineación de precisión mediante tecnología láser de última generación. Garantizamos la correcta alineación de ejes, poleas y equipos rotatorios para optimizar el desempeño y reducir el desgaste prematuro.',
        items: [
          'Alineación de ejes paralelos',
          'Alineación de ejes angulares',
          'Alineación de poleas y correas'
        ],
        image: '/img/alineacion.jpg'
      }
    ]
  },
  'sistema-de-pozo-a-tierra': {
    title: 'SISTEMAS DE POZO A TIERRA',
    description: 'Instalación y mantenimiento de sistemas de puesta a tierra',
    bannerImage: '/img/IMG_6312.jpg',
    sections: [
      {
        title: 'POZO A TIERRA',
        content: 'Servicio integral de instalación y mantenimiento de sistemas de pozo a tierra. Garantizamos la seguridad eléctrica de tus instalaciones industriales con sistemas de puesta a tierra de alta calidad y mediciones según normativas.',
        items: [
          'Instalación de pozos a tierra',
          'Medición de resistencia',
          'Mantenimiento preventivo'
        ],
        image: '/img/pozo.jpg'
      }
    ]
  },
  'analisis-vibracional': {
    title: 'ANÁLISIS VIBRACIONAL',
    description: 'Análisis avanzado de vibraciones en equipos industriales',
    bannerImage: '/img/IMG_6312.jpg',
    sections: [
      {
        title: 'ANÁLISIS VIBRACIONAL',
        content: 'Servicio de diagnóstico mediante análisis vibracional. Utilizamos equipos de última tecnología para detectar anomalías en máquinas rotatorias antes de que causen daños mayores.',
        items: [
          'Análisis ISO 20816',
          'Detección de desbalance',
          'Identificación de fallas incipientes'
        ],
        image: '/img/vibracional.jpg'
      }
    ]
  },
  'analisis-termografico': {
    title: 'ANÁLISIS TERMOGRÁFICO',
    description: 'Diagnóstico térmico infrarrojo de equipos industriales',
    bannerImage: '/img/IMG_6312.jpg',
    sections: [
      {
        title: 'ANÁLISIS TERMOGRÁFICO',
        content: 'Servicio de termografía infrarroja para detectar problemas de temperatura en equipos eléctricos y mecánicos. Identificamos puntos calientes que podrían indicar fallas antes de que ocurran.',
        items: [
          'Inspección de tableros eléctricos',
          'Análisis de máquinas rotatorias',
          'Detección de conexiones deficientes'
        ],
        image: '/img/termografia.jpg'
      }
    ]
  }
}

export default function ServicioDetail() {
  const { servicioId } = useParams()
  const servicio = serviciosData[servicioId]

  if (!servicio) {
    return (
      <div className="container my-5">
        <h1>Servicio no encontrado</h1>
        <p>El servicio que buscas no existe.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Banner */}
      <Banner
        title={servicio.title}
        imageSrc={servicio.bannerImage}
      />

      {/* Contenido */}
      <main className="container my-5">
        {servicio.sections.map((section, idx) => (
          <section key={idx} className="mb-5">
            <div className="row g-5 d-flex justify-content-center align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6 p-1">
                <div className="card w-100 border-0 p-0">
                  <article className="cardRewinded card-body w-100">
                    <h2 className="card-title h1 p-2">{section.title}</h2>
                    
                    {section.items && (
                      <ul className="mb-3">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <span className="fs-5 lh-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <p className="card-text">{section.content}</p>
                  </article>
                </div>
              </div>

              {section.image && (
                <div className="col-sm-12 col-md-6 col-lg-6 p-1">
                  <img src={section.image} className="img-fluid rounded-4" alt={section.title} />
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Beneficios */}
        <section className="my-5 py-5">
          <div className="card-titulo p-3 text-center">
            <h2 className="card-title p-4">BENEFICIOS DE TRABAJAR CON NOSOTROS</h2>
            <p className="fs-3 text-center">Soluciones integrales para la industria</p>
          </div>

          <div className="row align-items-center d-flex align-items-stretch m-0 g-2 mt-4">
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ backgroundColor: '#1A1D3F' }}>
              <img src="/img/engineer.png" className="img-fluid" alt="Beneficios" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card w-100 h-100">
                <div className="cardBeneficios card-body w-100 justify-content-center d-flex">
                  <ul className="list-unstyled text-center">
                    <li className="mb-4">✅ Personal técnico especializado</li>
                    <li className="mb-4">✅ Equipos de tecnología avanzada</li>
                    <li className="mb-4">✅ Certificaciones y estándares internacionales</li>
                    <li className="mb-4">✅ Garantía en nuestros servicios</li>
                    <li className="mb-4">✅ Atención rápida y profesional</li>
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
