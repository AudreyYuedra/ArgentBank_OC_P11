import React from "react"

import img_chat from "../../assets/images/icon-chat.png"
import img_money from "../../assets/images/icon-money.png"
import img_security from "../../assets/images/icon-security.png"

import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"

import "./Home.css"

export default Home

function Home() {
   return (
      <main className="main-home">
         <Banner />
         <section className="features">
            <Card
               image={img_chat}
               alt="icône de bulles de conversation"
               title="You are our #1 priority"
               content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />

            <Card image={img_money} alt="icône de billet" title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!" />

            <Card image={img_security} alt="icône d'un bouclier" title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe." />
         </section>
      </main>
   )
}
