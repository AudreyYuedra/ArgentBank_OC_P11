import { useState, useEffect } from "react"
import useNavigate from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify" // système messages

import { login, reset } from "../api/auth/authSlice"
import { getProfile } from "../api/userProfile/userProfileSlice"
import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

import "./Login.css"

export default Login

function Login() {
   const [formData, setFormData] = useState({
      email: " ",
      password: " ",
   })
   const { email, password } = formData

   const [remember, setRemember] = useState(false)

   const navigate = useNavigate()
   const dispatch = useDispatch() // màj value

   const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

   useEffect(() => {
      const customId = "custom-id-yes"
      if (isError) {
         toast.error(message)
      }
      if (isSuccess || user) {
         toast.success(message, {
            toastId: customId,
         })
         dispatch(getProfile())
         navigate("/profile")
      }
      dispatch(reset())
   }, [user, isError, isSuccess, message, navigate, dispatch])

   //* Changement d'entrées user
   const change = (event) => {
      setFormData((prevState) => ({
         ...prevState,
         [event.target.name]: event.target.value,
      }))
   }

   //* Envoie formulaire
   const submit = (event) => {
      event.preventDefault()
      const userData = {
         email,
         password,
      }
      dispatch(login(userData))
   }

   return (
      <main className="main-login">
         <section className="section-login">
            <div>
               <i className="fa fa-user-circle"></i>
               <h2>Sign In</h2>
            </div>
            <form onSubmit={submit}>
               <Field label="Username" content="email" type="email" value={email} onChange={change} required />
               <Field label="Password" content="password" type="password" value={password} onChange={change} required />

               {/* case à cocher*/}
               <Field label="Remember me" content="remember" type="checkbox" onChange={() => setRemember(!remember)} checked={remember} />

               <Button event={submit} content="Sign In" width="235px" height="38px" />
            </form>
         </section>
      </main>
   )
}
