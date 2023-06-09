import React from "react";
import {NavLink} from "react-router-dom"

export default function HostNav() {
    return (
        <div className="host-nav">
            <NavLink to="/host" end>Dashboard</NavLink>
            <NavLink to="/host/income">Income</NavLink>
            <NavLink to="/host/review">Review</NavLink>
        </div>
    )
}