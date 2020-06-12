import React from "react";
import { Container, Navbar, Nav, Row, Col, Jumbotron, Card, Button, ListGroup } from "react-bootstrap";
import "./App.css";
import Terminal from "./components/terminal";
import ArcadeScreen from "./components/arcadeScreen";


function App() {
    return (
      <div className="bg">
        <Container>
            <Navbar expand="md" className="mb-4" bg="transparent">
                <Navbar.Brand>Uzair Ishaq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#link">Contacts Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row md={12} className="justify-content-center" className="px-4 mb-4">
                {/* <Jumbotron><h3>terminal whooo</h3></Jumbotron> */}
                <ArcadeScreen />
            </Row>
            <Row>
            <Col md={8} className="mb-5">
                <Terminal />
            </Col>
            <Col md={4} className="border-left">
                <Card>
                    <Card.Img variant="top" src="sp.jpeg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    
                    
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            </Row>
          <p>yo</p>
        </Container>
      </div>
    );
}

export default App;
