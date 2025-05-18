import React from "react";
import { Link } from "react-router-dom";
export default function Nav () {
return (
    <nav className="navbar">
        <div className="nav-left">
            <h1 className="logo">
                Billettlyst
            </h1>
        </div>

        <div className="nav-center">
            <ul className="nav-links">
                <li><Link to="/musikk">Musikk</Link></li>
                <li><Link to="/sport">Sport</Link></li>
                <li><Link to="/Teater">Teater/Show</Link></li>

            </ul>
        </div>
        <div className="nav-right">
            <Link to ="/Login" className="login-link">Logg Inn</Link>
        </div>
    </nav>
    );

}