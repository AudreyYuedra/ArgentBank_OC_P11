import img_banner from "../../assets/images/bank-tree.jpeg"

export default Banner

function Banner() {
   return (
      <section className="section-banner">
         <img src={img_banner} className="img-banner" />

         <article className="content-banner">
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>

            <span className="text">Open a savings account with Argent Bank today!</span>
         </article>
      </section>
   )
}
