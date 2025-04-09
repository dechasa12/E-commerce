import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return(
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">MyApp</Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </nav>
            <div className="navbar-content">
                <h1>Welcome to MyApp</h1>
                <p>Your one-stop solution for all your needs.</p>
                <button className="navbar-button">Get Started</button>
                </div>
        </div>
    )
};

export default Navbar;