import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/images/argentBankLogo.png"

import styled from "styled-components"
import mixins from "../../utils/style/mixins.jsx"

export default Header

const StyledLink = styled.ul``

function Header() {
   const { user } = useSelector((state) => state.auth)
   const { userName } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   //* Déco user
   /*const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      dispatch(resetUser())
      navigate("/")
   } */

   return (
      <header>
         <Link to="/">
            <h1>
               <img className="logo" src={Logo} alt="Argent Bank" />
            </h1>
         </Link>

         <nav>
            <ul>
               {user ? (
                  <>
                     <li>
                        <Link to="/User">
                           <i className="fa fa-user-circle"></i>
                           {userName}
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
            </ul>
         </nav>
      </header>
   )
}
