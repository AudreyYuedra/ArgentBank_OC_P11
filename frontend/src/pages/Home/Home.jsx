import img_chat from "../../assets/images/icon-chat.png"
import img_money from "../../assets/images/icon-money.png"
import img_security from "../../assets/images/icon-security.png"

import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"

import styled from "styled-components"
import mixins from "../../utils/style"

export default Home

const Main = styled.div`
   ${mixins.column}
`
const Features = styled.div`
   ${mixins.column}
   @media (min-width: 920px) {
      flex-direction: row;
   }
`

function Home() {
   return (
      <Main>
         <Banner />
         <Features>
            <Card
               image={img_chat}
               title="You are our #1 priority"
               content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />

            <Card image={img_money} title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!" />

            <Card image={img_security} title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe." />
         </Features>
      </Main>
   )
}
