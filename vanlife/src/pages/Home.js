import React from "react";
import {Link} from "react-router-dom"
export default function Home() {
    return (
        <div className="home">
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className="home-link" to={"/vans"}>
                <div className="home-vans-button">
                    <h3>Find your van</h3>
                </div>
            </Link>
        </div>
    )
}