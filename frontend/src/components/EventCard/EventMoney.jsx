import Button from "../Button/Button"

import "./EventMoney.css"

export default EventMoney

function EventMoney({ title, subtitle, content }) {
   //* event transaction
   // const transaction = () => {}

   return (
      <article className="account">
         <div className="content-account">
            <h3 className="title-account">{title}</h3>
            <span className="money">{content}</span>
            <p className="subtitle-account">{subtitle}</p>
         </div>
         <Button event={transaction} content="Transaction" />
      </article>
   )
}
