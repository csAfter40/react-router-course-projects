import React from "react";
import { useRouteError, useAsyncError } from "react-router-dom";

export default function ErrorElement () {
    const error  = useAsyncError();
    // const error  = useRouteError();
    console.log(error)
    return (
        <div className="error-container">
            <h2>{error.message || "An error occured"}</h2>
        </div>
    )
}