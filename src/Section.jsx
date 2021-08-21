import React from 'react'
import './styles/Section.css';

export default function Section(props) {
    
    const {component} = props
    
    return (
        <div className="content-section">
            <p>{component}</p>
            {/* <p>The four Grand Slam tournaments are the Australian Open in January, the French Open from late May to early June, Wimbledon in late June to early July, and the US Open in August–September</p> */}
        </div>
    )
}
