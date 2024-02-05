import Button from "../../components/Button/Button.jsx"
import EventCard from "../../components/EventCard.EventCard.jsx"

import styled from "styled-components"
import { colors, mixins } from "../../utils/style/colors.jsx"

export default User

const Main = styled.main`
   ${mixins.column};
   align-item: center;
   ${colors.bg_secondary};
`
const SectionHead = styled.section`
   height: 138px;
   ${mixins.column};
   align-item: center;
   margin-bottom: 2rem;
`
const Title = styled.h2`
    font-size:
    font-weight:
    color: ${colors.bg_primary};
`
const Section = styled.section`
   ${mixins.column};
   align-item: center;
`

function User() {
   //* change le nom user
   // const userChange = () => {}

   return (
      <Main>
         <SectionHead>
            <Title>
               Welcome back <br />
               {user} !
            </Title>
            <Button content="Edit name" />
         </SectionHead>

         <Section>
            <EventCard />
            <EventCard />
            <EventCard />
         </Section>
      </Main>
   )
}
