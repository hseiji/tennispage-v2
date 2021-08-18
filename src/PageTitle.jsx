import React from 'react';
import './PageTitle.css';


export default function PageTitle(props) {
    
    const {title} = props;
    
    return (
        <div>
            {title}
        </div>
    )
}
