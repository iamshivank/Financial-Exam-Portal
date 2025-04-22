import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="top-bar">
                <div>
                    <span>Contact: info@garp.com | +1 201-719-7210</span>
                </div>
                <div>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </div>
            <nav className="main-nav">
                <div className="logo">GARP</div>
                <button className="mobile-menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#">About FRM</a></li>
                    <li><a href="#">Exam</a></li>
                    <li><a href="#">Study Resources</a></li>
                    <li><a href="#">Member Benefits</a></li>
                    <li><a href="#">News & Research</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 