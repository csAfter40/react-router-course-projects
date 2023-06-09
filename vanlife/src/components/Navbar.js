import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link className="vanlife-link" to={"/"}>#VANLIFE</Link>
            <div className="end-nav-container">
                <NavLink to={"/host"}>Host</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/vans"}>Vans</NavLink>
            </div>
        </nav>
    )
}