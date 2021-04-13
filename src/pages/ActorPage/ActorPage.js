import React from 'react'
import HeaderActorPage from '../../components/HeaderActorPage/HeaderActorPage'
import { Container } from 'react-bootstrap'
import Actors from '../../components/Actors/Actors';

export default function ActorPage({actors}) {
    const [filterText, setFilterText] = React.useState("");
    const [sortBy, setSortBy] = React.useState("fname");

    function filterTextChange(data){
        setFilterText(data);
    }
    function sortByChange(data){
        setSortBy(data);
    }
    return (
        <Container>
            <HeaderActorPage onFilterChange={filterTextChange} onSortChange={sortByChange}/>
            <Actors filterBy={filterText} sortBy={sortBy} actors={actors}/>
        </Container>
    )
}
