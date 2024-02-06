import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"

import { resetUser, updateProfile } from "../api/userProfile/userProfileSlice.jsx"

import Field from "../../components/Field/Field.jsx"
import Button from "../../components/Button/Button.jsx"
import EventCard from "../../components/EventCard.EventCard.jsx"

import styled from "styled-components"
import { colors, mixins } from "../../utils/style"

export default User

const Main = styled.main`
   ${mixins.column};
   align-item: center;
   ${colors.bg_secondary};
`
const SectionHead = styled.section`
   height: 138px;
   ${mixins.column};
   align-item: center;
   margin-bottom: 2rem;
`
const Title = styled.h2`
    font-size:
    font-weight:
    color: ${colors.bg_primary};
`
const Section = styled.section`
   ${mixins.column};
   align-item: center;
`

function User() {
   const [open, setOpen] = useState(" ")
   const [userName, setUserName] = useState(" ")

   const dispatch = useDispatch()

   const { firstName, lastName, isError, isSuccess, message } = useSelector((state) => state.user)

   useEffect(() => {
      const customId = "custom-id-yes"
      if (isError) {
         toast.error(message)
      }
      if (isSuccess) {
         toast.success(message, {
            taostId: custom,
         })
      }
      dispatch(resetUser())
   }, [isError, isSuccess, message])

   //* Change user name
   const openChange = () => {
      setOpen(!open)
   }
   const submit = (event) => {
      event.preventDefault()
      dispatch(updateProfile({ userName }))
      setUserName(" ")
      userNameChange(false)
   }

   return (
      <Main>
         <SectionHead>
            {!open ? (
               <>
                  <Title>
                     Welcome back
                     <br />
                     {firstName} {lastName} !
                  </Title>
                  <Button width="" height="" content="Edit name" onClick={openChange} />
               </>
            ) : (
               <>
                  <Title>Edit user info</Title>
                  <form onSubmit={submit}>
                     <Field label="User Name :" type="text" content="userName" value={userName} onChange={(event) => setUserName(event.target.value)} required />
                     <Field label="First Name :" type="text" content="firstName" placeholder={firstName} disabled />
                     <Field label="Last Name :" type="text" content="lastName" placeholder={lastName} disabled />
                     <Button content="Save" width="" height="" />
                  </form>
                  <Button content="Cancel" width="" height="" style="background-color: red" onClick={openChange} />
               </>
            )}
         </SectionHead>

         <Section>
            <EventCard />
            <EventCard />
            <EventCard />
         </Section>
      </Main>
   )
}
