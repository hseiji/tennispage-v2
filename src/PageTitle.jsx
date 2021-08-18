import React from 'react';
import './styles/PageTitle.css';


export default function PageTitle(props) {
    
    const {title} = props;
    
    return (
        <div>
            {title}
        </div>
    )
}
