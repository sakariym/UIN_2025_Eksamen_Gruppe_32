import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
export default function Nav () {
return (
    <nav className="navbar">
        <div className="nav-left">
        <Link to="/">
            <h1 className="logo">
              Billettlyst      
            </h1>
         </Link>
        </div>

        <div className="nav-center">
            <ul className="nav-links">
                <li><Link to="/musikk">Musikk</Link></li>
                <li><Link to="/sport">Sport</Link></li>
                <li><Link to="/Teater">Teater/Show</Link></li>

            </ul>
        </div>
        <div className="nav-right">
            <Link to ="/dashboard" className="login-link">Logg Inn</Link>
        </div>
    </nav>
    );
}
