import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSignIn, setSignOut } from "../../redux/reducer/authSlice"

import Logo from "../../assets/images/argentBankLogo.webp"

import "./Header.css"
import "../../utils/style/style.css"

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
            <img className="logo" src={Logo} alt="Argent Bank" />
            <h1 className="hidden">Argent Bank</h1>
         </Link>

         <nav>
            {user ? (
               <>
                  <Link to="/User" className="link">
                     <i className="fa fa-user-circle icon-header"></i>
                     {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
                  </Link>
                  <Link to="/Login" onClick={userSignOut} className="link">
                     <i className="fa fa-sign-out icon-header"></i>
                     Sign Out
                  </Link>
               </>
            ) : (
               <Link to="/Login" className="link">
                  <i className="fa fa-user-circle icon-header"></i>
                  Sign In
               </Link>
            )}
         </nav>
      </header>
   )
}
