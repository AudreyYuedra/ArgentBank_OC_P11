import React from "react"

import "./Button.css"

export default Button

function Button({ content, event, onClick, style }) {
   return (
      <button event={event} onClick={onClick} style={style}>
         {content}
      </button>
   )
}
