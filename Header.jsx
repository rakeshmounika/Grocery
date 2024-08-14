import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Grocery App</h1>
            <nav className="header1">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <Link to="/menu" className="dropbtn">Menu</Link>
                        {/* <ul className="dropdown-content">
                            <li><Link to="/fruits">Fruits</Link></li>
                            <li><Link to="/vegetables">Vegetables</Link></li>
                            <li><Link to="/dairy">Dairy</Link></li>
                        </ul> */}
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li className="profile-icon">
                        <a href="#"><i className="bi bi-person-circle"></i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg></a>
                        <ul className="dropdown">
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Sign In</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
