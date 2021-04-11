import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './HeaderActorPage.css';

export default function HeaderActorPage() {
    return (
        <Form className="p-actor-header">
            <Form.Row>
                <Col>               
                    <Form.Label>Filter by:</Form.Label>  
                    <Form.Control type="text"/>
                </Col>
                <Col>
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Control as="select">
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="age">Age</option>
                    </Form.Control>
                </Col>
            </Form.Row>                
        </Form>
    )
}
