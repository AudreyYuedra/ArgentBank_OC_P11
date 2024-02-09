import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from "../redux/reducer/profileSlice"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"

import "./EditName.css"

export default EditName

function EditName() {
   const [open, setOpen] = useState(false)
   const [userName, setUserName] = useState(" ")

   const { firstName, lastName, isError, isSuccess } = useSelector((state) => state.user)

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
   )
}
