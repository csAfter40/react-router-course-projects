import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserProvider";

export default function Navbar(){
    const {user} = useContext(UserContext)
    return (
        <nav className="navbar">
            <Link className="vanlife-link" to={"/"}>#VANLIFE</Link>
            <div className="end-nav-container">
                <NavLink to={"host"}>Host</NavLink>
                <NavLink to={"about"}>About</NavLink>
                <NavLink to={"vans"}>Vans</NavLink>
                {
                    user 
                        ? <NavLink to={"logout"}>Logout</NavLink>
                        : <NavLink to={"login"}>Login</NavLink>}
                
            </div>
        </nav>
    )
}