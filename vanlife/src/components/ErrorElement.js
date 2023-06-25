import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorElement () {
    const error  = useRouteError();
    return (
        <div className="error-container">
            <h2>{error.message || "An error occured"}</h2>
        </div>
    )
}