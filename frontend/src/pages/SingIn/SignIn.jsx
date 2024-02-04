import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

import styled from "styled-components"
import colors from "../../utils/style/colors.jsx"
import mixins from "../../utils/style/mixins.jsx"

export default SignIn

const Main = styled.main`
   background-color: ${colors.bg_secondary};
   display: flex;
   justify-content: center;
`
const Section = styled.section`
   box-sizing: border-box;
   width: 300px;
   height: 365px;
   margin-top: 3rem;
   background-color: ${colors.bg_primary};
   padding: 2rem;
`
const FormHeader = styled.div`
   height: 75px;
   ${mixins.column};
   align-items: center;
`

function SignIn() {
   //* eventlistener clic button form
   // const submit = () => {}

   return (
      <Main>
         <Section>
            <FormHeader>
               <i className="fa fa-user-circle"></i>
               <p>Sign In</p>
            </FormHeader>
            <form>
               <Field label="Username" content="username" type="text" />
               <Field label="Password" content="password" type="password" />

               {/* case à cocher*/}
               <input>Remember Me</input>

               <Button event={submit} content="Sign In" width="235px" height="38px" />
            </form>
         </Section>
      </Main>
   )
}
