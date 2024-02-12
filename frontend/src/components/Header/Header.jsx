import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSignIn, setSignOut } from "../../redux/reducer/authSlice"

import Logo from "../../assets/images/argentBankLogo.png"

import "./Header.css"

export default Header

function Header() {
   //* Extrait valeur depuis le store
   const user = useSelector((state) => state.auth.isAuthenticated)

   const dispatch = useDispatch() // màj valeur
   const userProfile = useSelector((state) => state.user) // extrait user profil

   //* Deco user
   const userSignOut = () => {
      dispatch(setSignOut())
   }

   useEffect(() => {
      const token = localStorage.getItem("authToken")
      if (token) {
         dispatch(setSignIn({ token })) // co user
      }
   }, [dispatch])

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
                           {userProfile.userName}
                        </Link>
                     </li>
                     <li>
                        <Link to="/Login" onClick={userSignOut}>
                           <i className="fa fa-sign-out"></i>
                           Sign Out
                        </Link>
                     </li>
                  </>
               ) : (
                  <li>
                     <Link to="/Login">
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
