import React from 'react';
import {
    Container,
    Navbar,
    Nav,
    Row,
    Col,
    Jumbotron,
    Card,
    Button,
    ListGroup,
    Image,
} from 'react-bootstrap';
import './App.css';
import Terminal from './components/terminal';
import ArcadeScreen from './components/arcadeScreen';

function App() {
    // return (
    //     <div className="bg1">
    //         <Container>
    //             <Navbar expand="md" className="mb-4" bg="transparent">
    //                 <Navbar.Brand className="h1 grad">Uzair Ishaq</Navbar.Brand>
    //                 <Navbar.Toggle
    //                     aria-controls="basic-navbar-nav"
    //                     className="border-0 grad"
    //                 />
    //                 <Navbar.Collapse
    //                     id="basic-navbar-nav"
    //                     className="justify-content-end"
    //                 >
    //                     <Nav>
    //                         <Nav.Link href="#home" className="gradLink">
    //                             Projects
    //                         </Nav.Link>
    //                         <Nav.Link href="#link" className="gradLink">
    //                             Contacts Me
    //                         </Nav.Link>
    //                     </Nav>
    //                     <Nav>
    //                         <Nav.Link
    //                             href="#link"
    //                             className="fa fa-linkedin sicon"
    //                         ></Nav.Link>
    //                         <Nav.Link
    //                             href="#link"
    //                             className="fa fa-github sicon"
    //                         ></Nav.Link>
    //                         <Nav.Link
    //                             href="#link"
    //                             className="fa fa-instagram sicon"
    //                         ></Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Navbar>
    //             {/* <Row
    //                 md={12}
    //                 className="justify-content-center"
    //                 className="px-2 mb-4"
    //             > */}
    //             <Jumbotron className="gradJumbo py-5 shadow-sm">
    //                 <h1 className="header">
    //                     Software Developer, Programmer, Engineer...
    //                 </h1>
    //                 <h5>I like to build things :)</h5>
    //             </Jumbotron>
    //             {/* <ArcadeScreen /> */}
    //             {/* </Row> */}
    //             <Row>
    //                 <Col md={5} lg={4}>
    //                     <Card className="gradBorder">
    //                         <div className="imgbg"></div>
    //                         <div className="mx-3 mt-3">
    //                             <Card.Img
    //                                 variant="top"
    //                                 src="sp.jpeg"
    //                                 className="rounded-circle shadow"
    //                             />
    //                         </div>

    //                         <Card.Body>
    //                             <Card.Title className="text-center">
    //                                 {/* <Image src="sp.jpeg" roundedCircle /> */}
    //                                 <span className="grad">Uzair Ishaq</span>
    //                             </Card.Title>

    //                             <Card.Text>
    //                                 Talk about who i am here and blah blah blah
    //                                 blah blah blah maybe
    //                             </Card.Text>
    //                             {/* <Button variant="primary">Go somewhere</Button> */}
    //                         </Card.Body>
    //                         <ListGroup className="list-group-flush">
    //                             <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //                             <ListGroup.Item>
    //                                 Dapibus ac facilisis in
    //                             </ListGroup.Item>
    //                             <ListGroup.Item>
    //                                 Vestibulum at eros
    //                             </ListGroup.Item>
    //                         </ListGroup>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //             <p>yo</p>
    //         </Container>
    //     </div>
    // );

    return (
        <div className="bg">
            <Container bg="dark">
                <Navbar expand="md" className="mb-4" bg="transparent">
                    <Navbar.Brand>Uzair Ishaq</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border-0"
                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="#home">Projects</Nav.Link>
                            <Nav.Link href="#link">Contacts Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row
                    md={12}
                    className="justify-content-center"
                    className="px-2 mb-4"
                >
                    {/* <Jumbotron><h3>terminal whooo</h3></Jumbotron> */}
                    <ArcadeScreen />
                </Row>
                <Row>
                    <Col md={8} className="mb-5">
                        <Terminal />
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="sp.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>

                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>
                                    Dapibus ac facilisis in
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Vestibulum at eros
                                </ListGroup.Item>
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
