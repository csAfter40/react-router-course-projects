import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link className="vanlife-link" to={"/"}>#VANLIFE</Link>
            <div className="end-nav-container">
                <Link to={"/about"}>About</Link>
                <Link to={"/vans"}>Vans</Link>
            </div>
        </nav>
    )
}