import React from "react";
import logo from "../assets/logo.jpg";


export default function Header() {
    return (
        <div className="header">
            <header>
                <img id="logo" src={logo} alt="logo" />
            </header>
        </div>
    )
}