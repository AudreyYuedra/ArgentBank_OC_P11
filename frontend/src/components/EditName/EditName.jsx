import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from "../../redux/reducer/profileSlice"
import axios from "axios"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

import "./EditName.css"

function EditName() {
   const dispatch = useDispatch()
   const userProfile = useSelector((state) => state.user) // récup données user
   const userToken = useSelector((state) => state.auth.token) // récup token

   const [isOpen, setIsOpen] = useState(false) // form fermé par défaut
   const [editedUserName, setEditedUserName] = useState(userProfile.userName) // définit état username

   //* Fermeture formulaire d'édition + save
   const saveChange = async (event) => {
      event.preventDefault()
      try {
         const editedUserNameString = String(editedUserName)
         console.log("editedUserNameString : ", editedUserNameString)
         //* Envoie requête API
         const response = axios.put(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
               headers: {
                  accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userToken}`,
               },
               body: {
                  userName: editedUserNameString,
               },
            }
         )
         console.log("Editname response : ", response)
         if (response.status === 200) {
            console.log("Response object : ", response)
            //const responseData = response.data
            //console.log("EditName response.data : ", response.data)
            dispatch(updateUserName(userProfile.userName)) // màj username dans store
            //console.log("Username was successfully updated :", responseData)
            setIsOpen(false)
         } else {
            if (response.status === 401) {
               const errorData = response.data
               console.error("Error 401 - editName : ", errorData.message)
            }
            if (response.status === 400) {
               const errorData = response.data
               console.error("Error 400 - editName : ", errorData)
            } else {
               //* Gestion spécifique pour autre erreur
               console.error("Error - editName : ", response.statusText)
            }
         }
      } catch (error) {
         //* Gestion des erreurs liées à la requête
         console.error("Another Error - editName : ", error)
      }
   }

   useEffect(() => {
      setEditedUserName(userProfile.userName) // màj username pour userProfile
   }, [userProfile.userName])

   return (
      <section className="section-user">
         {!isOpen ? (
            //* Mode édition désactivé
            <>
               <h2 className="title-user">
                  Welcome back
                  <br />
                  {userProfile.userName === "" ? (
                     <>
                        {userProfile.firstName} {userProfile.lastName}
                     </>
                  ) : (
                     <>{userProfile.userName}</>
                  )}
                  !
               </h2>
               <Button
                  width="88px"
                  height="40px"
                  content="Edit Name"
                  onClick={() => {
                     setIsOpen(true)
                  }}
               />
            </>
         ) : (
            //* Mode édition activé
            <>
               <h2 className="title-user">Edit user info</h2>
               <div className="modal">
                  <form onSubmit={saveChange}>
                     <Field label="User Name :" type="text" content="userName" onChange={(event) => setEditedUserName(event.target.value)} />
                     <Field label="First Name :" type="text" content="firstName" placeholder={userProfile.firstName} />
                     <Field label="Last Name :" type="text" content="lastName" placeholder={userProfile.lastName} />
                     <Button content="Save" width="88px" height="40px" />
                  </form>
                  <Button
                     content="Cancel"
                     width="88px"
                     height="40px"
                     onClick={() => {
                        setIsOpen(false)
                     }}
                  />
               </div>
            </>
         )}
      </section>
   )
}

export default EditName
