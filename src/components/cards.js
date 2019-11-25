import React from 'react';
import './card.scss'

const Card = (props) => {

    return (
        <div className='card-container'>
    
        <section className='card-title'>
            <a href={props.src}>
            <h1>{props.title}</h1>
            </a>
        </section>
        
        <div>
        <a href={props.src}>
        <img alt={props.title} src={props.img} />
        </a>
        </div>

        </div>

        
    )
}

export default Card