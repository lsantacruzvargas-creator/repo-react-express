import React from 'react'

export default function ServiceCard({ title, imageSrc, onClick }) {
  return (
    <div className="service" onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <button className="button_overTitle">{title}</button>
    </div>
  )
}
