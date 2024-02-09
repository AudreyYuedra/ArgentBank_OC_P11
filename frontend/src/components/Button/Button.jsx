import React from "react"

import "./Button.css"

export default Button

function Button({ content, width, height, event }) {
   return (
      <button event={event} width={width} height={height}>
         {content}
      </button>
   )
}
