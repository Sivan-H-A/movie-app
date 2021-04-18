import React from 'react'
import { Card } from 'react-bootstrap'
import './ActorCard.css';

export default function ActorCard({actor}) {
    return (
            <Card style={{ width: '18rem'}} className="col-sm-6 col-md-3 c-actor-card">
                <Card.Img variant="top" src={actor.img}/>
                <Card.Body className="actor-c-body">
                    <Card.Title>
                        <a href={actor.imdb} target="_blank">
                            {`${actor.fname} ${actor.lname}`}
                        </a>
                    </Card.Title>
                    <Card.Text>
                        {actor.age}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
