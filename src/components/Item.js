import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`}>
            <Card className="card">
                <Card.Img variant="top" src={info.image} />
                <Card.Body>
                    <Card.Title>{info.title} </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item;


