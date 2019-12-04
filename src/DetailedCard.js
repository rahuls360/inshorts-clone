import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Card from './Card';
import {data} from './data';
import {MdArrowBack} from 'react-icons/md'

const DetailedCard = ({match, history}) => {
    const [cardData, setCardData] = useState(null)
    const [error, setError] = useState(false)
    const routeId = match.params.id;

    useEffect(() => {
        let index = data.findIndex(item => item.id === routeId);
        if(index > -1){
            setCardData(data[index]);
        }else {
            setError(true);
        }
    }, [routeId]);

    if(error){
        return <p>Card id not found</p>
    }

    return (
        <div>
            <span className="icon"><MdArrowBack color="black" size="2em" onClick={() => history.goBack()}/></span>
            {cardData && <Card {...cardData}/>}
        </div>
    )
}

export default withRouter(DetailedCard);
