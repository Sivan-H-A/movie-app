import React from 'react'
import HeaderActorPage from '../../components/HeaderActorPage/HeaderActorPage'
import { Container } from 'react-bootstrap'
import Actors from '../../components/Actors/Actors';

export default function ActorPage({actors}) {
    const [filterText, setFilterText] = React.useState("");
    // const [sortBy, setsortBy] = useState("fname");

    function filterTextChange(data){
        setFilterText(data);
    }
    return (
        <Container>
            <HeaderActorPage onFilterChange={filterTextChange}/>
            <Actors filterBy={filterText} actors={actors}/>
        </Container>
    )
}
