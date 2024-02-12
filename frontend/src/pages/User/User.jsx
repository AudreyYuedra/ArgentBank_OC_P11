import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setProfile } from "../../redux/reducer/profileSlice.jsx"

import EditName from "../../components/EditName/EditName.jsx"
import EventMoney from "../../components/EventMoney/EventMoney.jsx"

import "./User.css"
import "../../utils/style/style.css"

export default User

function User() {
   const dispatch = useDispatch()

   useEffect(() => {
      const authToken = localStorage.getItems("authToken") // récup token
      //* Vérif si token existe
      if (authToken) {
         fetchProfileData(authToken)
      }
   })

   //* Récup données user depuis API
   async function fetchProfileData(authToken) {
      // Envoie requête API
      try {
         const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
               accept: "application/json",
               "Content-Type": "application/json",
               Authorization: `Bearer ${authToken}`,
            },
         })
         if (response.ok) {
            const responseData = await response.json()
            // Dispatch l'action setProfile avec les données de profil récupérées
            dispatch(setProfile(responseData)) // màj valeur + déclenche rendu
            console.log(responseData)
            console.log(responseData.body)
         } else {
            console.error("Error :", response.statusText)
         }
      } catch (error) {
         console.error("Error", error)
      }
   }

   return (
      <main className="main-user">
         <EditName />

         <section className="section-card">
            <h2 className="hidden">Accounts</h2>
            <EventMoney />
            <EventMoney />
            <EventMoney />
         </section>
      </main>
   )
}
