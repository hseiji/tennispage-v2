import React from 'react';
import './styles/PageTitle.css';


export default function PageTitle(props) {
    
    const {title, content} = props;
    
    return (
        <div>
            <div className="title">
                {title}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}
