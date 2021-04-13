import React from 'react'
import {CardGroup, CardDeck } from 'react-bootstrap';
import ActorCard from '../ActorCard/ActorCard';
import './Actors.css'
export default function Actors({filterBy, sortBy, actors}) {
    let actorsCards;

    if(actors){
        if(filterBy){
            actors = actors.filter(actor=> actor.fname.toLowerCase().includes(filterBy.toLowerCase()) || 
                                            actor.lname.toLowerCase().includes(filterBy.toLowerCase()));               
        }
        if(sortBy){
            actors.sort(function(a,b){
                switch (sortBy){
                    case "fname":
                    case "lname":
                        return a[sortBy].toUpperCase().localeCompare(b[sortBy].toUpperCase());
                    case "age":
                        return b.age-a.age;

                }
            })
        }
        if(actors)
            actorsCards = actors.map(actor=><ActorCard actor={actor}/>);
    }
    return (
            <div className="actors-cards">
                {actorsCards}
            </div>
    )
}
