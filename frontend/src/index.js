import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import store from "./redux/store.jsx"
import App from "./App.jsx"

import reportWebVitals from "./reportWebVitals"

import "./utils/style/style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
)

reportWebVitals()
