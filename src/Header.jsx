import React from 'react'
import './styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="page-logo">
                    <Link to="/">Home</Link>
                </div>
                <a href="/" className="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul>
                        <li><Link to="/AO">Australian Open</Link></li>
                        <li><Link to="/RG">Roland Garros</Link></li>
                        <li><Link to="/WN">Wimbledon</Link></li>
                        <li><Link to="/UO">US Open</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
