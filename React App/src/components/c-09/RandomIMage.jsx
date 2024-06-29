import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

// Dynamic imports using import.meta.glob
const images = import.meta.glob('../../assets/image/*.jpg');

const RandomImage = () => {
  const [random, setRandom] = useState(1);
  const [image, setImage] = useState('');

  const updateImage = async (imageName) => {
    const imageModule = await images[`../../assets/image/${imageName}`]();
    setImage(imageModule.default);
  };

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    setRandom(randomNumber);

    if (randomNumber <= 4) {
      updateImage('arka1.jpg');
    } else if (randomNumber <= 7) {
      updateImage('arka2.jpg');
    } else {
      updateImage('arka3.jpg');
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '5rem auto' }}>
      <Card.Img variant="top" src={image} alt="Random" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{random}</Card.Text>
        <Button variant="primary" onClick={handleRandom}>
         Random Image
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RandomImage;