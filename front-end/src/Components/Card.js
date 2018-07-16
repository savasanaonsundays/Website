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
          src={props.image}
          alt="Card image cap"
        />
      </Card>
    </div>
  );
};

export default Item;
