import React from 'react'
import PageTitle from './PageTitle';
import './styles/Pages.css';

export default function Home() {
    return (
        <div>
            <PageTitle title="The Main Grand Slams of Tennis"/>
            <p className="content-section">
                There are 4 tennis tournaments that are considered the greatest for the sport. These events give the participants more points in the ranking system besides better prize money and media attention.
            </p>
            <p className="content-section">
                The tennis player success could be tested and measured by how many titles they have won  during their career. The majors, another way they call the Grand Slams, are played throughout the year on different court types like hard, clay and grass.
            </p>
            <h3>The most successful men players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Roger Federer (20)</li>
                    <li>Rafael Nadal (20)</li>
                    <li>Novak Djokovic (20)</li>
                    <li>Pete Sampras (14)</li>
                    <li>Roy Emerson (12)</li>
                </ol>
            </div>
            <h3>The most successful women players (followed by titles):</h3>
            <div className="list-parent">
                <ol>
                    <li>Margaret Court (24)</li>
                    <li>Serena Williams (23)</li>
                    <li>Steffi Graf (22)</li>
                    <li>Helen Wills (19)</li>
                    <li>Martina Navratilova (18)</li>
                </ol>
            </div>
        </div>
    )
}