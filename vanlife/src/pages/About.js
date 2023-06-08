import React from "react";
import {Link} from "react-router-dom";

export default function About() {
    return (
        <div className="about">
            <div className="about-pic"></div>
            <div className="about-content">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="about-slogan">
                    <p>Your destination is waiting.</p>
                    <p>Your van is ready.</p>
                    <Link className="about-slogan-link" to={"/vans"}>
                        <div className="about-vans-button">
                            <h3>Explore our vans</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}