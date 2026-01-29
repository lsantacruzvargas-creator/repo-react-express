import React from 'react'

export default function CardMVV({ title, content, imageSrc, backgroundColor = 'black' }) {
  return (
    <div className="cardMvv" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="text_cardMvv">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
