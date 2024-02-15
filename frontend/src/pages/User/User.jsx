import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

import { setProfile } from "../../redux/reducer/profileSlice.jsx"

import EditName from "../../components/EditName/EditName.jsx"
import EventMoney from "../../components/EventMoney/EventMoney.jsx"

import "./User.css"
import "../../utils/style/style.css"

export default User

function User() {
   const dispatch = useDispatch()

   //* Récup données user depuis API
   async function fetchProfileData(authToken) {
      // Envoie requête API
      try {
         const response = await axios("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
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

   useEffect(() => {
      const authToken = localStorage.getItems("authToken") // récup token
      //* Vérif si token existe
      if (authToken) {
         fetchProfileData(authToken)
      }
   })

   return (
      <main className="main-user">
         <EditName />

         <section className="section-card">
            <h2 className="hidden">Accounts</h2>
            <EventMoney title="Argent Bank Checking (x8349)" content="$2,082.79" subtitle="Available Balance" />
            <EventMoney title="Argent Bank Savings (x6712)" content="$10,928.42" subtitle="Available Balance" />
            <EventMoney title="Argent Bank Credit Card (x8349)" content="$184.30" subtitle="Current Balance" />
         </section>
      </main>
   )
}
