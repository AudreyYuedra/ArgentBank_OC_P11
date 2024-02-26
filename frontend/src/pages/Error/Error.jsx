import React from "react"

import "./Error.css"

export default Error

function Error() {
   return (
      <main className="main-error">
         <section className="container-error">
            <h2 className="title-error">Error 404 !</h2>
            <p className="error">The request page does not exist</p>
         </section>
      </main>
   )
}
