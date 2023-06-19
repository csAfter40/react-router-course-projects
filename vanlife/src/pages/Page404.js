import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="page-404">
            <div className="page-404-text-container">
                <h2>Sorry, the page you were looking for was not found.</h2>
                <Link to={"/"} className="page-404-button">
                    <h3>Return to home</h3>
                </Link>
            </div>
        </div>
    )
}