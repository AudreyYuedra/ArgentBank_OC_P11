import Link from "react-router-dom"
import Logo from "../../assets/images/argentBankLogo.png"

import styled from "styled-components"
import mixins from "../../utils/style"

export default Header

const Nav = styled.nav`
   height: 65px;
   ${mixins.rowSpaceBetween}
   align-items: center;
   padding: 5px 20px;
`
const LogoImg = styled.img`
   width: 200px;
   height: 54px;
   &:hover {
      cursor: pointer;
   }
`
const StyledLink = styled(Link)`
   width: 74px;
   height: 18px;
   font-weight: bold;
   text-decoration: none;
   margin-right: 0.5rem;
   &:hover {
      cursor: pointer;
      text-decoration: underline;
   }
`

function Header() {
   return (
      <Nav>
         <Link to="/">
            <h1>
               <LogoImg src={Logo} alt="Argent Bank" />
            </h1>
         </Link>
         <StyledLink to="/SignIn">
            <i class="fa fa-user-circle"></i>
            Sign In
         </StyledLink>
      </Nav>
   )
}
