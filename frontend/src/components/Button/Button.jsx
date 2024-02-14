import React from "react"

import "./Button.css"

export default Button

function Button({ content, event }) {
   return <button event={event}>{content}</button>
}
