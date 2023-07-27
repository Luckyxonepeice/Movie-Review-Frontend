import ReactDOM from "react-dom"
import React from 'react'
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import ContexProvider from "./context";

const rootElement = document.getElementById("root")
const root =  ReactDOM.createRoot(rootElement)

root.render(
    <BrowserRouter>
        <ContexProvider>
            <App/>
        </ContexProvider>
    </BrowserRouter>,
    document.getElementById("root")
);