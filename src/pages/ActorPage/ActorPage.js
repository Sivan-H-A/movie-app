import React from 'react'
import HeaderActorPage from '../../components/HeaderActorPage/HeaderActorPage'
import { Container } from 'react-bootstrap'
import Actors from '../../components/Actors/Actors';

export default function ActorPage({actors}) {
    
    return (
        <Container>
            <HeaderActorPage/>
            <Actors actors={actors}/>
        </Container>
    )
}
