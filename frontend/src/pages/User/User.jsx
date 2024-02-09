import React from "react"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { resetUser, updateProfile } from "../../api/userProfile/userProfileSlice.jsx"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"
import EventMoney from "../../components/EventMoney/EventMoney.jsx"

import "./User.css"

export default User

function User() {
   const [open, setOpen] = useState(false)
   const [userName, setUserName] = useState(" ")

   const dispatch = useDispatch()

   const { firstName, lastName, isError, isSuccess } = useSelector((state) => state.user)

   useEffect(() => {
      /*
      if (isError) {
         //
      }
      if (isSuccess) {
         //
         })
      }
      */
      dispatch(resetUser())
   }, [isError, isSuccess])

   //* Change user name
   const openChange = () => {
      setOpen(!open)
   }
   const submit = (event) => {
      event.preventDefault()
      dispatch(updateProfile({ userName }))
      setUserName(" ")
      openChange(false)
   }

   return (
      <main className="main-user">
         <section className="section-user">
            {!open ? (
               <>
                  <h2 className="title-user">
                     Welcome back
                     <br />
                     {firstName} {lastName} !
                  </h2>
                  <Button width="" height="" content="Edit name" onClick={openChange} />
               </>
            ) : (
               <>
                  <h2 className="title-user">Edit user info</h2>
                  <form onSubmit={submit}>
                     <Field label="User Name :" type="text" content="userName" value={userName} onChange={(event) => setUserName(event.target.value)} required />
                     <Field label="First Name :" type="text" content="firstName" placeholder={firstName} disabled />
                     <Field label="Last Name :" type="text" content="lastName" placeholder={lastName} disabled />
                     <Button content="Save" width="" height="" />
                  </form>
                  <Button content="Cancel" width="" height="" style="background-color: red" onClick={openChange} />
               </>
            )}
         </section>

         <section className="section-card">
            <EventMoney />
            <EventMoney />
            <EventMoney />
         </section>
      </main>
   )
}
