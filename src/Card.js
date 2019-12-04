import React from 'react';
import {AiTwotoneLike} from 'react-icons/ai';
import {AiTwotoneDislike} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md';

const Card = ({title, description, image, tags}) => {
    return (
        <div className="card-container">
            <img src={image} alt={title} />
            <div className="content">
                <h3>{title}</h3>
                <span>{tags.join(' | ')}</span>
                <p>{description}</p>
                <div className="interactions">
                    <AiTwotoneLike color="grey" size="2em"/>
                    <MdFavorite color="grey" size="2em"/>
                    <AiTwotoneDislike color="grey" size="2em"/>
                </div>
            </div>
        </div>
    );
}

export default Card;