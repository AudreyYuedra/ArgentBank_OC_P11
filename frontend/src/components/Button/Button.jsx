import React from "react"

import "./Button.css"

export default Button

function Button({ content, event, onClick }) {
   return (
      <button event={event} onClick={onClick}>
         {content}
      </button>
   )
}
