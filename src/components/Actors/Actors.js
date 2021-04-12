import React from 'react'
import {CardGroup, CardDeck } from 'react-bootstrap';
import ActorCard from '../ActorCard/ActorCard';

export default function Actors({filterBy, actors}) {
    let actorsCards;
    
    if(actors){
        if(filterBy){
            actors = actors.filter(actor=> actor.fname.toLowerCase().includes(filterBy.toLowerCase()) || 
                                            actor.lname.toLowerCase().includes(filterBy.toLowerCase()));               
        }
        if(actors)
            actorsCards = actors.map(actor=><ActorCard actor={actor}/>);
    }
    return (
            <CardDeck>
                {actorsCards}
            </CardDeck>
    )
}
