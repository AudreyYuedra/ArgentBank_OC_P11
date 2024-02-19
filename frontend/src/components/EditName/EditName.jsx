import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from "../../redux/reducer/profileSlice"
import axios from "axios"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

// import "./EditName.css"

export default EditName

function EditName() {
   const dispatch = useDispatch()
   const userProfile = useSelector((state) => state.user) // récup données user
   const userToken = useSelector((state) => state.auth.token) // récup token

   const [open, setOpen] = useState(false) // gérer ouverture form
   const [editedUserName, setEditedUserName] = useState(userProfile.userName) // définit état username (par défaut username enregistrer dans store)

   //* Ouverture formulaire d'édition nom
   const openEditChange = () => {
      setOpen(!open)
      console.log("statut openEditChange : ", open)
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
            dispatch(updateUserName(editedUserName)) // màj username dans store
            console.log("Username was successfully updated :", responseData)
            setOpen(open)
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

   //* Fermeture formulaire sans save
   const cancelChange = () => {
      setEditedUserName(userProfile.userName) // Rétablit valeur initiale userName
      setOpen(open)
   }

   // Màj username si changement
   const userNameChange = (event) => {
      setEditedUserName(event.target.value)
   }

   useEffect(() => {
      setEditedUserName(userProfile.userName)
   }, [userProfile.userName])

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
               <Button width="88px" height="40px" content="Edit Name" onClick={openEditChange} />
            </>
         ) : (
            // Si mode édition activé
            <>
               <h2 className="title-user">Edit user info</h2>
               <form onSubmit={saveChange}>
                  <Field label="User Name :" type="text" content="userName" value={editedUserName} onChange={userNameChange} required />
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

/*   FAIRE UNE MODALE POUR LE FORM EDITNAME !!!!

<section classname="section-user">
   <h2 className="title-user">
      Welcome back
      <br />
      {userProfile.firstName} {userProfile.lastName} !
   </h2>
   <Button width="88px" height="40px" content="Edit Name" onClick={openEditChange} />
</section>
{if(openEditName(!open)) {
   <modal>
   <h2 className="title-user">Edit user info</h2>
   <form onSubmit={saveChange}>
      <Field label="User Name :" type="text" content="userName" value={editedUserName} onChange={userNameChange} required />
      <Field label="First Name :" type="text" content="firstName" placeholder={userProfile.firstName} readOnly />
      <Field label="Last Name :" type="text" content="lastName" placeholder={userProfile.lastName} readOnly />
      <Button content="Save" width="88px" height="40px" />
   </form>
   <Button content="Cancel" width="88px" height="40px" onClick={cancelChange} /></modal>
}}

*/
