import React, { useEffect } from "react";
import Banner from "../components/Banner";
import CardMVV from "../components/CardMVV";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    // Intersection Observer para animaciones al scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".multi_rows, #carousel_services")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Banner Principal */}
      <Banner
        videoSrc="/video/VID20250525153740.mp4"
        title="ALCOINSAC"
        subtitle="Soluciones Industriales Integrales"
        description="Mantenimiento preventivo, correctivo y predictivo para tu maquinaria"
      />

      {/* Sección Misión, Visión, Valores */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <CardMVV
              title="Misión"
              content="Proporcionar servicios de mantenimiento industrial de calidad superior para optimizar el desempeño de la maquinaria industrial."
              imageSrc="/img/mision_1.jpg"
            />
          </div>
          <div className="col-lg-4">
            <CardMVV
              title="Visión"
              content="Ser la empresa líder en soluciones de mantenimiento industrial en la región, con tecnología de punta y profesionales altamente capacitados."
              imageSrc="/img/vision_1.png"
            />
          </div>
          <div className="col-lg-4">
            <CardMVV
              title="Valores"
              content="Excelencia, integridad, responsabilidad, innovación y compromiso con la satisfacción del cliente."
              imageSrc="/img/valores_1.png"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="card-titulo">
            <h2>Nuestros Servicios</h2>
          </div>

          {/* Vista de escritorio (columnas) */}
          <div id="column_services" className="container text-center">
            <div className="row justify-content-between gap-5 mb-4">
              <div className="col-sm m-0 lg-4 p-1">
                <Link to="/servicios/rebobinado-de-motores" className="">
                  <ServiceCard
                    title="Rebobinado de Motores"
                    imageSrc="/img/rebo1.jpg"
                  />
                </Link>
              </div>
              <div className="col-sm m-0 p-1">
                <Link to="/servicios/alineacion-de-motores" className="">
                  <ServiceCard
                    title="Alineación Laser"
                    imageSrc="/img/ALINEAMIENTO-DE-EQUIPOS-Y-MOTORES.jpg"
                  />
                </Link>
              </div>
              <div className="col-sm m-0 p-1">
                <Link to="/servicios/sistema-de-pozo-a-tierra" className="">
                  <ServiceCard
                    title="Pozo a Tierra"
                    imageSrc="/img/mantenimiento-pozo-a-tierra.jpg"
                  />
                </Link>
              </div>
            </div>

            <div className="row row-cols-2 justify-content-between gap-5">
              <div className="col-sm m-3 p-1">
                <Link to="/servicios/analisis-vibracional" className="">
                  <ServiceCard
                    title="Análisis Vibracional"
                    imageSrc="/img/vibracion-motor.jpg"
                  />
                </Link>
              </div>

              <div className="col-sm m-3 p-1">
                <Link to="/servicios/analisis-termografico" className="">
                  <ServiceCard
                    title="Análisis Termográfico"
                    imageSrc="/img/termografia4.avif"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Vista móvil (carrusel) */}
          <div id="carousel_services" className="mt-4">
            <div id="servicesCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Link to="/servicios/rebobinado-de-motores">
                    <ServiceCard
                      title="Rebobinado de Motores"
                      imageSrc="/img/rebo1.jpg"
                    />
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link to="/servicios/alineacion-de-motores">
                    <ServiceCard
                      title="Alineación Laser"
                      imageSrc="/img/ALINEAMIENTO-DE-EQUIPOS-Y-MOTORES.jpg"
                    />
                  </Link>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimientos */}
      <section className="py-5">
        <div className="container">
          <div className="card-titulo">
            <h2>Tipos de Mantenimiento</h2>
          </div>

          <div className="row g-4 mt-4 multi_rows">
            <div className="col-lg-4">
              <Link
                to="/mantenimientos/preventivo"
                style={{ textDecoration: "none" }}
              >
                <div className="image_rows">
                  <img
                    src="/img/mantto-prevent1.webp"
                    alt="Mantenimiento Preventivo"
                  />
                  <div className="overlay-text">Preventivo</div>
                </div>
                <h4 className="mt-3">Mantenimiento Preventivo</h4>
                <p>
                  Evita problemas futuros con mantenimiento planificado y
                  periódico.
                </p>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                to="/mantenimientos/correctivo"
                style={{ textDecoration: "none" }}
              >
                <div className="image_rows">
                  <img
                    src="/img/mantenimientos1.jpg"
                    alt="Mantenimiento Correctivo"
                  />
                  <div className="overlay-text">Correctivo</div>
                </div>
                <h4 className="mt-3">Mantenimiento Correctivo</h4>
                <p>
                  Soluciona problemas de forma inmediata para minimizar tiempos
                  de inactividad.
                </p>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                to="/mantenimientos/predictivo"
                style={{ textDecoration: "none" }}
              >
                <div className="image_rows">
                  <img
                    src="/img/mantto-predic1.png"
                    alt="Mantenimiento Predictivo"
                  />
                  <div className="overlay-text">Predictivo</div>
                </div>
                <h4 className="mt-3">Mantenimiento Predictivo</h4>
                <p>
                  Predice fallas antes de que ocurran usando análisis avanzados.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "aqua", width: "100%", height: "10px" }}
        ></div>
      </section>

      <section>
        <div
          className="card-titulo p-3 text-center"
          style={{ paddingTop: "20px" }}
        >
          <h2 className="card-title p-4">PORQUE TRABAJAR CON NOSOTROS</h2>
          <p className="fs-3 text-center">
            Soluciones integrales para la industria
          </p>
        </div>
        <div className="bannerWithout container-fluid p-3">
          <div className="row align-items-center">
            <div className="col-sm col-md-6 col-lg-6 p-1 m-0 pt-5">
              <div className="work-image">
                <img
                  src="img/photo-worker-in-front-of-his.jpg"
                  className="img-fluid rounded float-start"
                  alt="Por que trabajar con nosotros"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-6 p-3 m-0">
              <div className="workList align-items-center align-content-center p-3">
                <ul className="list-unstyled">
                  <li className="workingText">
                    <p className="h2">
                      <i
                        className="bi bi-check2-square heading"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      Asesoramiento de principio a fin en su proyecto.
                    </p>
                  </li>
                  <li className="workingText">
                    <p className="h2">
                      <i
                        className="bi bi-check2-square heading"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      Alto compromiso de honestidad e integridad
                    </p>
                  </li>
                  <li className="workingText">
                    <p className="h2">
                      <i
                        className="bi bi-check2-square heading"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      Personal técnico calificado para atender urgencias con
                      precisión y rapidez.
                    </p>
                  </li>
                  <li className="workingText">
                    <p className="h2">
                      <i
                        className="bi bi-check2-square heading"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      Trabajamos con marcas líderes que respaldan la calidad y
                      seguridad de nuestros servicios.
                    </p>
                  </li>
                  <li className="workingText">
                    <p className="h2">
                      <i
                        className="bi bi-check2-square heading"
                        style={{ fontSize: "2rem" }}
                      ></i>
                      Asesoramiento de principio a fin en su proyecto.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
