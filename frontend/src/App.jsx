import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import User from "./pages/User/User.jsx"
import Error from "./pages/Error/Error.jsx"

import "./utils/style/style.css"

export default App

function App() {
   const token = useSelector((state) => state.auth.token)

   return (
      <div className="app">
         <Router>
            <Header />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/user" element={token ? <User /> : <Error />} />
            </Routes>

            <Footer />
         </Router>
      </div>
   )
}
