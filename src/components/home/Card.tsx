import React, { FC } from 'react';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const Card: FC<CardProps> = ({icon, title, description}) => {
    return (
        <div className="card max-w-sm bg-white sm:bg-transparent shadow-lg sm:shadow-none rounded-lg sm:rounded-none p-6 sm:p-0 text-center">        
            <div className='icon h-12 flex justify-center items-center mb-7 -z-10'>{icon}</div>
            <h3 className='font-bold text-lg mb-4'>{title}</h3>
            <p className='text-base max-w-xs'>{description}</p>
        </div>
    );
}