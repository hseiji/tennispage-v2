import React from 'react'
import PageTitle from './PageTitle';
import './styles/WNpage.css';

export default function WNpage() {
    return (
        <div>
            <PageTitle title="Wimbledon"/>
            <p className="content-section">
                Wimbledon starts in late June to early July.
            </p>
        </div>
    )
}
