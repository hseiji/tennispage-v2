import React from 'react'
import PageTitle from './PageTitle';
import './styles/Pages.css';

export default function UOpage() {
    return (
        <div>
            <PageTitle title="US Open"/>
            <p className="content-section">
                US Open tipically starts in August to September and it is played in New York, United States on Hard courts.
            </p>
            <h3>The most successful men players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Jimmy Connors (5)</li>
                    <li>Roger Federer (5)</li>
                    <li>Pete Sampras (5)</li>
                    <li>John McEnroe (4)</li>
                    <li>Rafael Nadal (4)</li>
                </ol>
            </div>
            <h3>The most successful women players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Serena Williams (6)</li>
                    <li>Chris Evert (6)</li>
                    <li>Steffi Graf (5)</li>
                    <li>Martina Navratilova (4)</li>
                    <li>Billie King (3)</li>
                </ol>
            </div>
        </div>
    )
}