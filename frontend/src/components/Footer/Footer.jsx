import Link from "react-router-dom"
import Logo from "../../assets/images/argentBankLogo.png"

import styled from "styled-components"
import colors from "../../utils/style"

export default Footer

const StyledFooter = styled.div`
   height: px;
   width: 100%;
   background-color: ${colors.details_line};
   display: flex;
   justify-content: center;
   border-top: 2px solid #ccc;
   padding: 2rem 0 1.5rem;
`

function Footer() {
   return (
      <StyledFooter>
         <p>Copyright 2020 Argent Bank</p>
      </StyledFooter>
   )
}
