import React  from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from './components/Slider'
import mozambik from './mozambik.jpg'

export const Home = () => (
  <>
  <Slider/>
  <Container style={{puddingTop:'2rem', paddingBottom:'2rem'}}>
      <Row>
        <Col>
        <Card style={{width:'18rem'}}>
          <Card.Img variant="top" src={mozambik}/>
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text> 
                   Lorem ipunsem some texzt I ned again to put ut here
                </Card.Text>
                <Button variant="primary">Lern more</Button>
              </Card.Body>
         </Card>
        </Col>
      </Row>
  </Container>
  </>
)