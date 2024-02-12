import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from "../../redux/reducer/profileSlice"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

// import "./EditName.css"

export default EditName

function EditName() {
   const dispatch = useDispatch()
   const userProfile = useSelector((state) => state.user) // récup données user
   const token = useSelector((state) => state.auth.token) // récup token

   const [open, setOpen] = useState(false) // gérer ouverture form
   const [editedUserName, setEditedUserName] = useState(userProfile.userName) // définit état username (par défaut username enregistrer dans store)

   useEffect(() => {
      setEditedUserName(userProfile.userName)
   }, [userProfile.userName])

   //* Ouverture formulaire d'édition nom
   const openEditChange = () => {
      setOpen(true)
   }

   //* Fermeture formulaire d'édition + save
   const saveChange = async (event) => {
      event.preventDefault()
      setOpen(false)
      try {
         const editedUserNameString = String(editedUserName)
         // Envoie requête API
         const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
               accept: "application/json",
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
               userName: editedUserNameString,
            }),
         })
         if (response.ok) {
            const responseData = await response.json()
            dispatch(updateUserName(editedUserName)) // màj username dans store
            console.log("Le nom d/utilisateur a été mis à jour avec succès :", responseData)
         } else {
            //* Gestion spécifique pour code erreur 401
            if (response.status === 401) {
               const errorData = await response.json()
               console.error("Error 401 : ", errorData.message)

               //* Gestion spécifique pour code erreur 400
            } else if (response.status === 400) {
               const errorData = await response.json()
               console.error("Error 400 : ", errorData)

               //* Gestion spécifique pour autre erreur (500)
            } else {
               console.error("Error : ", response.statusText)
            }
         }
      } catch (error) {
         //* Gestion des erreurs liées à la requête
         console.error("Error : ", error)
      }
   }

   //* Fermeture formulaire sans save
   const cancelChange = () => {
      setEditedUserName(userProfile.userName) // Rétablit valeur initiale userName
      setOpen(false)
   }

   // Màj username si changement
   const userNameChange = (event) => {
      setEditedUserName(event.target.value)
   }

   return (
      <section className="section-user">
         {!open ? (
            // Si mode édition désactivé
            <>
               <h2 className="title-user">
                  Welcome back
                  <br />
                  {userProfile.firstName} {userProfile.lastName} !
               </h2>
               <Button width="" height="" content="Edit Name" onClick={openEditChange} />
            </>
         ) : (
            // Si mode édition activé
            <>
               <h2 className="title-user">Edit user info</h2>
               <form onSubmit={saveChange}>
                  <Field label="User Name :" type="text" content="userName" value={editedUserName} onChange={userNameChange} required />
                  <Field label="First Name :" type="text" content="firstName" placeholder={userProfile.firstName} readOnly />
                  <Field label="Last Name :" type="text" content="lastName" placeholder={userProfile.lastName} readOnly />
                  <Button content="Save" width="" height="" />
               </form>
               <Button content="Cancel" width="" height="" style="background-color: red" onClick={cancelChange} />
            </>
         )}
      </section>
   )
}
