import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.js"
import User from "./pages/User/User.jsx"

import "./utils/style/style.css"

export default App

function App() {
   return (
      <div className="app">
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/User" element={<User />} />
         </Routes>

         <Footer />
      </div>
   )
}
