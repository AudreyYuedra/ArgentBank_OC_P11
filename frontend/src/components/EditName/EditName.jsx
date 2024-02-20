import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../../redux/reducer/profileSlice"
import axios from "axios"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

// import "./EditName.css"  correc nom fichier

export default EditName

function EditName() {
   const dispatch = useDispatch()
   const userProfile = useSelector((state) => state.user) // récup données user
   const userToken = useSelector((state) => state.auth.token) // récup token

   const [close, setClose] = useState(true) // form fermé par défaut
   const [editedUserName, setEditedUserName] = useState("") // définit état username

   //* Ouverture formulaire d'édition nom
   /* const openEditChange = () => {
      // setClose(!close)
      console.log("vous avez cliqué !")
   } */

   //* Fermeture formulaire sans save
   const cancelChange = () => {
      // setEditedUserName(userProfile.userName) // Rétablit valeur initiale userName
      setClose(close)
      console.log("vous avez encore cliqué !")
   }

   //* Fermeture formulaire d'édition + save
   const saveChange = async (event) => {
      event.preventDefault()
      try {
         const editedUserNameString = String(editedUserName)
         // Envoie requête API
         const response = axios.put(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
               headers: {
                  accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userToken}`,
               },
               body: JSON.stringify({
                  userName: editedUserNameString,
               }),
            }
         )
         if (response.status === 200) {
            const responseData = response.data
            dispatch(setProfile(editedUserName)) // màj username dans store
            console.log("Username was successfully updated :", responseData)
            setClose(close)
         } else {
            //* Gestion spécifique pour code erreur 401
            if (response.status === 401) {
               const errorData = response.data
               console.error("Error 401 - editName : ", errorData.message)

               //* Gestion spécifique pour code erreur 400
            } else if (response.status === 400) {
               const errorData = response.data
               console.error("Error 400 - editName : ", errorData)

               //* Gestion spécifique pour autre erreur (500)
            } else {
               console.error("Error - editName : ", response.statusText)
            }
         }
      } catch (error) {
         //* Gestion des erreurs liées à la requête
         console.error("Another Error - editName : ", error)
      }
   }

   /* useEffect(() => {
      if (close && "click") {
         openEditChange()
      }
   }, []) */

   return (
      <section className="section-user">
         {close ? (
            //* Mode édition désactivé
            <>
               <h2 className="title-user">
                  Welcome back
                  <br />
                  {userProfile.firstName} {userProfile.lastName} !
               </h2>
               <Button
                  width="88px"
                  height="40px"
                  content="Edit Name"
                  onClick={() => {
                     setClose(!close)
                  }}
               />
            </>
         ) : (
            //* Mode édition activé
            <>
               <h2 className="title-user">Edit user info</h2>
               <form onSubmit={saveChange}>
                  <Field label="User Name :" type="text" content="userName" onChange={(event) => setEditedUserName(event.target.value)} required />
                  <Field label="First Name :" type="text" content="firstName" placeholder={userProfile.firstName} readOnly />
                  <Field label="Last Name :" type="text" content="lastName" placeholder={userProfile.lastName} readOnly />
                  <Button content="Save" width="88px" height="40px" />
               </form>
               <Button content="Cancel" width="88px" height="40px" onClick={cancelChange} />
            </>
         )}
      </section>
   )
}
