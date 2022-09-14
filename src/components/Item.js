import React from "react";
import Card from 'react-bootstrap/Card';

const Item = ({ info }) => {
    return (
        <Card className="card">
        <Card.Img variant="top" src={info.image} />
        <Card.Body>
        <Card.Title>{info.title} </Card.Title>
        </Card.Body>
        </Card>
    )
}

export default Item;


