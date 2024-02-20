import React from "react"

import Button from "../Button/Button"

import "./EventMoney.css"

export default EventMoney

function EventMoney({ title, subtitle, content }) {
   return (
      <article className="account">
         <div className="content-account">
            <h3 className="title-account">{title}</h3>
            <span className="money">{content}</span>
            <p className="subtitle-account">{subtitle}</p>
         </div>
         <Button content="View Transactions" />
      </article>
   )
}
