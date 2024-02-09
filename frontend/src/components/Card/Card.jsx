import React from "react"

import "./Card.css"

export default Card

function Card({ image, title, content }) {
   return (
      <article className="card-feature">
         <img src={image} className="feature-icon" />
         <h3>{title}</h3>
         <p>{content}</p>
      </article>
   )
}
