import React from 'react';
import classes from './Card.module.scss';

interface CardProps {
    children: JSX.Element;
}

const Card = ({children}: CardProps) => {
    return(
        <div className={classes.card}>
            {children}
        </div>
    )
}

export default Card;