import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSignIn } from "../../redux/reducer/authSlice.jsx"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

import "./Login.css"

export default Login

function Login() {
   const navigate = useNavigate()
   const dispatch = useDispatch() // màj value

   //* Stockage valeurs form
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [errorMessage, setErrorMessage] = useState("")
   const [remember, setRemember] = useState(false)

   //* Envoie formulaire
   const submit = async (event) => {
      event.preventDefault()
      const formData = {
         email: email,
         password: password,
      }

      //* Envoie requête vers API pour connexion
      try {
         const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         })
         //* Vérif requête réussie
         if (response.ok) {
            const responseData = await response.json() // récup données
            console.log(responseData)
            const token = responseData.body.token // extract token auth
            localStorage.setItem("authToken", token) // save token
            navigate("/User") // redirection
            dispatch(setSignIn({ token })) // envoie action au store (user connecté)
         } else {
            const errorData = await response.json() // récup données erreur
            console.log("Error : ", response.statusText)
            setErrorMessage(errorData.message) // màj message erreur
         }
      } catch {
         //* Gestion erreurs imprévues
         setErrorMessage("en error as occured.") // màj message erreur
      }
   }

   return (
      <main className="main-login">
         <section className="section-login">
            <div className="form-header">
               <i className="fa fa-user-circle"></i>
               <h2>Sign In</h2>
            </div>
            <form onSubmit={submit}>
               {errorMessage && <p className="error-login">{errorMessage}</p>}

               <Field label="Username" content="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
               <Field label="Password" content="password" type="password" onChange={(e) => setPassword(e.target.value)} required />

               <div className="check-login">
                  <input type="checkbox" id="remember" name="check-remember" onChange={() => setRemember(!remember)} checked={remember} />
                  <label htmlFor="remember">Remember me</label>
               </div>

               <Button content="Sign In" className="btn-login" />
            </form>
         </section>
      </main>
   )
}
