import Link, { useNavigate } from "react-router-dom"
import Logo from "../../assets/images/argentBankLogo.png"

import styled from "styled-components"
import mixins from "../../utils/style"
import { useDispatch, useSelector } from "react-redux"

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
const StyledLink = styled.ul`
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
   const { user } = useSelector((state) => state.auth)
   const { userName } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   //* Déco user
   const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      dispatch(resetUser())
      navigate("/")
   }

   return (
      <Nav>
         <Link to="/">
            <h1>
               <LogoImg src={Logo} alt="Argent Bank" />
            </h1>
         </Link>

         <StyledLink>
            {user ? (
               <>
                  <li>
                     <Link to="/User">
                        <i className="fa fa-user-circle"></i>
                        {username}
                     </Link>
                  </li>
                  <li>
                     <Link to="/SignIn">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                     </Link>
                  </li>
               </>
            ) : (
               <li>
                  <Link to="/SignIn">
                     <i class="fa fa-user-circle"></i>
                     Sign In
                  </Link>
               </li>
            )}
         </StyledLink>
      </Nav>
   )
}
