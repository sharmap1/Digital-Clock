import "./App.css";
import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const App = () => {
  const lightblue = "lightblue";
  const [bg, setBg] = useState(lightblue);
  const [name, setName] = useState("click");
  const [title, setTitle] = useState("Snow White");
  const [image, setImage] = useState(
    "https://d23.com/app/uploads/2015/06/snow41160x600.jpg"
  );

  const bgChange = () => {
    let newBg = "pink";
    setBg(newBg);
    setName("Back 😄");
    setTitle("Awesome 7 Dwarfs");
    setImage(
      "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/snow-white-and-the-seven-dwarfs1.jpg"
    );
  };
  const bgBack = () => {
    setBg(lightblue);
    setName("click");
    setTitle("Snow White");
    setImage("https://d23.com/app/uploads/2015/06/snow41160x600.jpg");
  };
  return (
    <>
      <Container
        className="cont"
        style={{ backgroundColor: bg, marginTop: "50px", padding: "20px" }}
      >
        <Row>
          <Col md={12}>
            <Card>
              <Card.Img src={image} alt="Card image" />
              <Card.Title className="title">{title}</Card.Title>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <button className="btn" onClick={bgChange} onDoubleClick={bgBack}>
              {name}
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
