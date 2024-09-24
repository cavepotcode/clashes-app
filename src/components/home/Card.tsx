import React, { FC } from 'react';
import './Home.scss'

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const Card: FC<CardProps> = ({icon, title, description}) => {
    return (
        <div className="card">
            
            <div className='icon'>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}