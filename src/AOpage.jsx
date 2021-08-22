import React from 'react'
import PageTitle from './PageTitle';
import './styles/Pages.css';

export default function AOpage() {
    return (
        <div>
            <PageTitle title="Australian Open"/>
            <p className="content-section">
                Australian Open is the first Grand Slam of the year staring in January. It is played in Melbourne, Australia on the Hard court.
            </p>
            <h3>The most successful men players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Novak Djokovic (9)</li>
                    <li>Roy Emerson (6)</li>
                    <li>Roger Federer (6)</li>
                    <li>Jack Crawford (4)</li>
                    <li>Ken Rosewall (4)</li>
                </ol>
            </div>
            <h3>The most successful women players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Serena Williams (7)</li>
                    <li>Steffi Graf (4)</li>
                    <li>Margaret Court (4)</li>
                    <li>Monica Seles (4)</li>
                    <li>Evone Cawley (4)</li>
                </ol>
            </div>
        </div>
    )
}
