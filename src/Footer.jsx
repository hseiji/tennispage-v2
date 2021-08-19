import React from 'react'
import './styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
                <footer className="main-footer">
                    <div><h3>Tennis Associations</h3></div>
                    <div className="main-footer-container">
                        <ul className="navbar footer-nav navbar-links">
                            <li>
                                <Link to="https://www.atptour.com/" target="_blank">
                                <img src="../Images/ATPlogo.png" alt="ATP logo"/>
                                </Link>
                            </li> 
                            <li>
                                <Link to="https://www.wtatennis.com/" target="_blank">
                                    images/wta-logo.png
                                    <img src="../Images/wta-logo.png" alt="WTA logo"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.itftennis.com/en/" target="_blank">
                                    itflogo.png
                                    <img src="images/itflogo.png" alt="ITF logo"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
        </div>
    )
}
