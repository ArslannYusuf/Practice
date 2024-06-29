import React from "react";
import { Button, Card } from "react-bootstrap";

const StudentCards = (student) => {
  const { isim, yas, kurs, img } = student;
  return (
    <Card style={{ width: "20rem" }} className="std-cards">
      <Card.Img variant="top" src={img} style={{height:"350px"}} />
      <Card.Body className="d-flex flex-column gap-4">
        <Card.Title>{isim}</Card.Title>
        <Card.Text>{kurs}</Card.Text>
        <Card.Subtitle>{yas}</Card.Subtitle>
        <Button variant="info" className="py-3">Click Me</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCards;
