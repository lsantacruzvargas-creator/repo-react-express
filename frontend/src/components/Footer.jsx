import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer container-fluid p-3 m-0">
        <div className="row align-items-top p-2 g-5 m-0">
          {/* Logo */}
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img src="/img/Logo_grande.png" alt="logo" className="img-thumbnail rounded" />
          </div>

          {/* Contacto */}
          <div className="col-sm-12 col-md-3 col-lg-3 footer_division">
            <h2>Contacto</h2>
            <ul className="list-unstyled">
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-envelope-at"></i>
                  <a href="mailto:Ventas@alcoinsac.com">Ventas@alcoinsac.com</a>
                </div>
              </li>
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-telephone"></i>
                  <a href="https://wa.me/51969585300?text=Bienvenido%20a%20Alcoinsac,%20en%20que%20podemos%20ayudarlo" target="_blank" rel="noopener noreferrer">
                    Teléfono: +51 969585300
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div className="col-sm-12 col-md-3 col-lg-3 footer_division">
            <h2>Enlaces útiles</h2>
            <ul className="list-unstyled">
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-book"></i>
                  <a href="#">Política de Calidad</a>
                </div>
              </li>
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-journal-text"></i>
                  <a href="#">Términos de servicio</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-sm-12 col-md-3 col-lg-3 footer_division">
            <h2>Síguenos en redes sociales</h2>
            <ul className="list-unstyled">
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-facebook"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
              </li>
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-twitter-x"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">X-Twitter</a>
                </div>
              </li>
              <li>
                <div className="icon_footer h5">
                  <i className="bi bi-instagram"></i>
                  <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2025 Alcoinsac. Todos los derechos reservados.</p>
      </div>

      {/* WhatsApp Button */}
      <a href="https://wa.me/51969585300?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20rebobinado%20de%20motores" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-wsp">
        <img src="/img/whatsapp.webp" alt="WhatsApp" /> Contáctanos
      </a>
    </>
  )
}
