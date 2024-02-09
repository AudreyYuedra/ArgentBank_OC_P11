import React from "react"

import img_banner from "../../assets/images/bank-tree.jpeg"

import "./Banner.css"

export default Banner

function Banner() {
   return (
      <section className="section-banner">
         <img src={img_banner} alt="petite pousse de plante dans un verre rempli de pièces" className="img-banner" />

         <article className="content-banner">
            <h2 className="hidden">Promoted Content</h2>

            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>

            <span className="text">Open a savings account with Argent Bank today!</span>
         </article>
      </section>
   )
}
