import React from "react"
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import User from "./pages/User/User.jsx"

import store from "./redux/store.jsx"

import "./utils/style/style.css"

export default App

function App() {
   return (
      <Provider store={store}>
         <div className="app">
            <Header />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/User" element={<User />} />
            </Routes>

            <Footer />
         </div>
      </Provider>
   )
}
