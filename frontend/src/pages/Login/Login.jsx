import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
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
         const response = await axios.post("http://localhost:3001/api/v1/user/login", formData, {
            headers: {
               "Content-Type": "application/json",
            },
         })
         //* Vérif requête réussie  ==> PROB IF !!!
         if (response.status === 200) {
            const responseData = response.data // récup données
            const token = responseData.body.token // extract token auth
            localStorage.setItem("authToken", token) // save token
            dispatch(setSignIn({ token })) // envoie action au store (user connecté)
            navigate("/User") // redirection
         } else {
            setErrorMessage(response.statusText) // màj message erreur
         }
      } catch {
         //* Gestion erreurs imprévues
         setErrorMessage("An error as occured.") // màj message erreur
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

               <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />
            </form>
         </section>
      </main>
   )
}
