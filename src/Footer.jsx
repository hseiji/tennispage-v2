import React from 'react'
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import atplogo from './Images/ATPlogo.png';
import wtalogo from './Images/wta-logo.png';
import itflogo from './Images/itflogo.png';


export default function Footer() {
    return (
        <div className="footer-div">
                <hr className="footer-separator"/>
                <footer className="main-footer">
                    <div><h3>Tennis Associations</h3></div>
                    <div className="main-footer-container">
                        <ul className="navbar footer-nav navbar-links">
                            <li>
                                <Link to="https://www.atptour.com/" target="_blank">
                                <img src={atplogo} alt="ATP logo"/>
                                </Link>
                            </li> 
                            <li>
                                <Link to="https://www.wtatennis.com/" target="_blank">
                                    <img src={wtalogo} alt="WTA logo"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.itftennis.com/en/" target="_blank">
                                    <img src={itflogo} alt="ITF logo"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
        </div>
    )
}
