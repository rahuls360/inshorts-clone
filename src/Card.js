import React from 'react';

const Card = ({title, description, image, tags}) => {
    return (
        <div className="card-container">
            <img src={image} alt={title} />
            <div className="content">
                <h3>{title}</h3>
                <span>{tags.join(' | ')}</span>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;