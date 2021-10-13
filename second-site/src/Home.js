import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider from "./components/Slider";
import Jumbotron from "./components/Junbotron";
import mozambik from "./mozambik.jpg";
import madagascar from "./madagascar.jpg";
import zanzibar from "./zanzibar.jpg";

export const Home = () => (
  <>
    <Slider />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mozambik} />
            <Card.Body>
              <Card.Title>WebDev Blog</Card.Title>
              <Card.Text>
                Lorem ipunsem some texzt I ned again to put ut here
              </Card.Text>
              <Button variant="primary">Lern more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={madagascar} />
            <Card.Body>
              <Card.Title>WebDev Blog2</Card.Title>
              <Card.Text>
                Lorem ipunsem some texzt I ned again to put ut here
              </Card.Text>
              <Button variant="primary">Lern more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={zanzibar} />
            <Card.Body>
              <Card.Title>WebDev Blog3</Card.Title>
              <Card.Text>
                Lorem ipunsem some texzt I ned again to put ut here
              </Card.Text>
              <Button variant="primary">Lern more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Jumbotron />
    <Container style={{ marginBottom: "30px" }}>
      <Row>
        <Col md={7}>
          <img src={mozambik} height={600} />
        </Col>
        <Col md={5}>
          <h2> Web Developer 3454334565</h2>
          <p>
            This is a common warning that developers run into when starting out
            with hooks in React. There are 3 possible reasons for this warning:
            You may have mismatching versions of React and ReactDOM. You may
            have more than one copy of React running in your application such
            that the version of React imported by ReactDOM is not that same
            version that you import in your application. Most common: You're
            breaking the rules of hooks. You must only call hooks while React is
            rendering a function component.
          </p>
        </Col>
      </Row>
    </Container>
  </>
);
