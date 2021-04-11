import React from 'react'
import { Col, Form } from 'react-bootstrap'


export default function HeaderActorPage() {
    return (
        <Form>
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
