import React from "react";
import {NavLink} from "react-router-dom"

export default function HostNav() {
    return (
        <div className="host-nav">
            <NavLink to="." end>Dashboard</NavLink>
            <NavLink to="income">Income</NavLink>
            <NavLink to="vans">Vans</NavLink>
            <NavLink to="review">Review</NavLink>
        </div>
    )
}