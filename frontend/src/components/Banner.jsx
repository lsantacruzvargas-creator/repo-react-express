import React from 'react'

export default function Banner({ videoSrc, title, subtitle, description }) {
  return (
    <section className="section_main">
      <div className="banner">
        {videoSrc ? (
          <video autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta videos HTML5
          </video>
        ) : (
          <div style={{ backgroundColor: '#1a1a1a', width: '100%', height: '100%' }}></div>
        )}
        <div className="text_banner">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  )
}
