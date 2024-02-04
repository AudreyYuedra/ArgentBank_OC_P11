import { Routes, Route } from "react-router-dom"
import Header from "../componentsHeaderHeader.jsx"
import Home from "../pages/Home.jsx"
import SignIn from "../pages/SignIn.jsx"
import User from "../pages/User.jsx"
import Footer from "../components/Footer/Footer.jsx"

import styled from "styled-components"
import colors from "../../utils/style"

export default App

const GlobalStyle = styled.div`
   backgroung-color: ${colors.bg_primary};
   font-family: Avenir, Helvetica, Arial, sans-serif;
   text-align: center;
   color: ${colors.txt_primary};
   margin: 0;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`

function App() {
   return (
      <GlobalStyle>
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/User" element={<User />} />
         </Routes>

         <Footer />
      </GlobalStyle>
   )
}
