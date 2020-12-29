import "./App.css";
import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const App = () => {
  let newtime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newtime);
  // newtime has been passed in the useState coz it is the initial value
  // ctime is the initial value in the parameter which is now equal to newtime

  const UpdateTime = () => {
    newtime = new Date().toLocaleTimeString();
    // calling the exact time again
    setCtime(newtime);
    // setCtime is updated data
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Img
                src="https://www.algonquincollege.com/pembroke/files/2014/01/TimeFlies.jpg"
                alt="Card image"
              />
              <Card.Title className="title">What's the Time?</Card.Title>
              <Card.Text>
                <h1 className="time">{ctime}</h1>
              </Card.Text>
            </Card>
            {/* <Button variant="info" onClick={UpdateTime}>
          click
        </Button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
