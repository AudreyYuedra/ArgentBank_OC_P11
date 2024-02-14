import React from "react"

import "./Field.css"

export default Field

function Field({ label, type, content, value }) {
   return (
      <div className="field-content">
         <label htmlFor={content}>{label}</label>
         <input type={type} id={content} name={content} value={value} />
      </div>
   )
}
