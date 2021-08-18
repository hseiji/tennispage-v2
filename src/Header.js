import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="page-logo">
                    <a href="/">Home</a>
                </div>

                <div className="navbar-links">
                    <ul>
                        <li><a className="atag" href="/">Australian Open</a></li>
                        <li><a href="/">Roland Garros</a></li>
                        <li><a href="/">Wimbledon</a></li>
                        <li><a href="/">US Open</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
