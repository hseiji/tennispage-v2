import React from 'react'
import PageTitle from './PageTitle';
import './styles/Pages.css';

export default function WNpage() {
    return (
        <div>
            <PageTitle title="Wimbledon"/>
            <p className="content-section">
                Wimbledon starts in late June to early July and it is played in London, England on the traditional grass courts. It is the oldest tennis tournament and regarded as the most prestigious. Wimbledon tradition includes a strict dress code for competitors and strawberries and cream are consumed at the tournament.
            </p>
            <h3>The most successful men players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Roger Federer (8)</li>
                    <li>Pete Sampras (7)</li>
                    <li>William Renshaw (7)</li>
                    <li>Novak Djokovic (6)</li>
                    <li>Bjorn Borg (5)</li>
                </ol>
            </div>
            <h3>The most successful women players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Martina Navratilova (9)</li>
                    <li>Steffi Graf (7)</li>
                    <li>Serena Williams (7)</li>
                    <li>Venus Williams (5)</li>
                    <li>Billie Jean King (4)</li>
                </ol>
            </div>
        </div>
    )
}
