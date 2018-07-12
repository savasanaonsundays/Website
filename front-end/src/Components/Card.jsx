import React from 'react';
import './card.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Item = props => {
  return (
    <div>
      <Card>
        <CardBody className="individualcard">
          <CardTitle>{props.title}</CardTitle>
        </CardBody>
        <CardImg
          className="lowimage"
          top
          width="100%"
          src="https://images.unsplash.com/photo-1511654433543-916c15d46ad6?ixlib=rb-0.3.5&s=69eddab7603aad693591810613e4f86c&auto=format&fit=crop&w=668&q=80"
          alt="Card image cap"
        />
      </Card>
    </div>
  );
};

export default Item;
