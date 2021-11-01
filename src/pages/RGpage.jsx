import React from 'react'
import PageTitle from '../PageTitle';
import '../styles/Pages.css';

export default function AOpage() {
    return (
        <div className="main-container">
            <PageTitle title="Roland Garros"/>
            <p className="content-section">
                Roland Garros or French Open starts from late May and it is played in Paris, France on red Clay courts.
            </p>
            <h3>The most successful men players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Rafael Nadal (13)</li>
                    <li>Max Decugis (8)</li>
                    <li>Björn Borg  (6)</li>
                    <li>Henri Cochet (5)</li>
                    <li>André Vacherot (4)</li>
                </ol>
            </div>
            <h3>The most successful women players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Chris Evert (7)</li>
                    <li>Steffi Graf (6)</li>
                    <li>Justine Henin (4)</li>
                    <li>Margaret Court (3)</li>
                    <li>Arnatxa Sanchéz-Vicario (3)</li>
                </ol>
            </div>
        </div>
    )
}
