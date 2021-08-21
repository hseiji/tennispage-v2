import React from 'react'
import PageTitle from './PageTitle';
import './styles/Homepage.css';

export default function Home() {
    return (
        <div>
            <PageTitle title="The Main Grand Slams of Tennis"/>
            <p className="content-section">
                There are 4 tournaments that are considered the greatest for the sport.
            </p>
        </div>
    )
}