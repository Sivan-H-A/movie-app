import React from 'react'
import {CardGroup, CardDeck } from 'react-bootstrap';
import ActorCard from '../ActorCard/ActorCard';

export default function Actors({actors}) {
    let actorsCards;
    if(actors){
        actorsCards = actors.map(actor=><ActorCard actor={actor}/>);
    }
    return (
            <CardDeck>
                {actorsCards}
            </CardDeck>
    )
}
