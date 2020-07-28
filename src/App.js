import React, { useEffect, useState } from 'react'
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
    Form,
} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './dark-mode.css';]

import Terminal from './components/terminal'
import ArcadeScreen from './components/arcadeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import './dark-mode.css'
import './App.css'
import SkillBar from './components/skillBar'

const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const darkThemeSelected =
            localStorage.getItem('darkSwitch') !== null &&
            localStorage.getItem('darkSwitch') === 'dark'
        darkThemeSelected
            ? document.body.setAttribute('data-theme', 'dark')
            : document.body.removeAttribute('data-theme')
        if (darkThemeSelected) setDarkMode(true)
    }, [])
    const changeTheme = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            setDarkMode(true)
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('darkSwitch', 'dark')
        } else {
            setDarkMode(false)
            document.body.removeAttribute('data-theme')
            localStorage.removeItem('darkSwitch')
        }
    }
    return (
        <div className="bg1">
            <Container>
                <Navbar expand="md" variant={darkMode ? 'dark' : 'light'}>
                    <Navbar.Brand className="h1 grad mt-1">
                        Uzair Ishaq
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border-0"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="gradLink navb">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="#link" className="gradLink">
                                Contacts Me
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link
                                href="#link"
                                className="fa fa-linkedin sicon navb"
                            ></Nav.Link>
                            <Nav.Link
                                href="#link"
                                className="fa fa-github sicon"
                            ></Nav.Link>
                            <Nav.Link
                                href="#link"
                                className="fa fa-instagram sicon"
                            ></Nav.Link>
                            <Navbar.Text className="border-left pl-3 ml-2">
                                <div class="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="darkSwitch"
                                        checked={darkMode}
                                        onChange={changeTheme}
                                    />
                                    <label
                                        className="custom-control-label "
                                        for="darkSwitch"
                                    >
                                        Dark Theme
                                    </label>
                                </div>
                                <script src="dark-mode-switch.min.js"></script>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Row
                    md={12}
                    className="justify-content-center"
                    className="px-2 mb-4"
                > */}
            </Container>
            <Container fluid className=" m-0 p-0 h100">
                <Jumbotron className="gradJumbo shadow-sm" fluid="true">
                    <Container>
                        <div className="typewriterContainer">
                            <div className="typewriter">
                                <h2 className="header">Uzair Ishaq</h2>
                            </div>
                        </div>
                        <br />
                        <div className="typewriterContainer">
                            <div className="typewriter2 pt-1">
                                <h5>I like to build things :)</h5>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                {/* <ArcadeScreen /> */}
                {/* </Row> */}
                <Row>
                    <Col md={5} lg={4}>
                        <Card className="gradBorder">
                            {/* <div className="imgbg"></div> */}
                            <div className="mx-3 mt-3">
                                <Card.Img
                                    variant="top"
                                    src="sp.jpeg"
                                    className="srounded-circle shadow"
                                />
                            </div>

                            <Card.Body>
                                <Card.Title className="text-center">
                                    {/* <Image src="sp.jpeg" roundedCircle /> */}
                                    <span className="grad">Skills</span>
                                </Card.Title>

                                <Card.Text>
                                    Shieeee i been learning and dattttt
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {/* <ListGroup.Item>lskdjflkdjf</ListGroup.Item> */}
                                <ListGroup.Item>
                                    <SkillBar
                                        text="Java"
                                        value="95"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <SkillBar
                                        text="Javascript"
                                        value="90"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <SkillBar
                                        text="React"
                                        value="90"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <SkillBar
                                        text="Python"
                                        value="85"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <SkillBar
                                        text="Django"
                                        value="80"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Vestibulum at eros
                                </ListGroup.Item>
                                <ListGroup.Item>alksjdflsjadlf</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={5} lg={4}>
                        <Card className="gradBorder">
                            {/* <div className="imgbg"></div> */}
                            <div className="mx-3 mt-3">
                                <Card.Img
                                    variant="top"
                                    src="sp.jpeg"
                                    className="srounded-circle shadow"
                                />
                            </div>

                            <Card.Body>
                                <Card.Title className="text-center">
                                    {/* <Image src="sp.jpeg" roundedCircle /> */}
                                    <span className="grad">Skills</span>
                                </Card.Title>

                                <Card.Text>
                                    Shieeee i been learning and dattttt
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {/* <ListGroup.Item>lskdjflkdjf</ListGroup.Item> */}
                                <ListGroup.Item>
                                    <SkillBar
                                        text="Java"
                                        value="95"
                                        style={{
                                            marginTop: '-0.8em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                    <SkillBar
                                        text="React"
                                        value="90"
                                        style={{
                                            marginTop: '-1em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                    <SkillBar
                                        text="Javascript"
                                        value="85"
                                        style={{
                                            marginTop: '-1em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                    <SkillBar
                                        text="Python"
                                        value="80"
                                        style={{
                                            marginTop: '-1em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                    <SkillBar
                                        text="Django"
                                        value="75"
                                        style={{
                                            marginTop: '-1em',
                                            marginBottom: '-0.45em',
                                        }}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Vestibulum at eros
                                </ListGroup.Item>
                                <ListGroup.Item>alksjdflsjadlf</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <SkillBar />
                    </Col>
                </Row>
                <p>yo</p>
            </Container>
        </div>
    )

    // return (
    //     <div className="bg">
    //         <Container bg="dark">
    //             <Navbar expand="md" className="mb-4" bg="transparent">
    //                 <Navbar.Brand>Uzair Ishaq</Navbar.Brand>
    //                 <Navbar.Toggle
    //                     aria-controls="basic-navbar-nav"
    //                     className="border-0"
    //                 />
    //                 <Navbar.Collapse
    //                     id="basic-navbar-nav"
    //                     className="justify-content-end"
    //                 >
    //                     <Nav>
    //                         <Nav.Link href="#home">Projects</Nav.Link>
    //                         <Nav.Link href="#link">Contacts Me</Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Navbar>
    //             <Row
    //                 md={12}
    //                 className="justify-content-center"
    //                 className="px-2 mb-4"
    //             >
    //                 {/* <Jumbotron><h3>terminal whooo</h3></Jumbotron> */}
    //                 <ArcadeScreen />
    //             </Row>
    //             <Row>
    //                 <Col md={8} className="mb-5">
    //                     <Terminal />
    //                 </Col>
    //                 <Col md={4}>
    //                     <Card>
    //                         <Card.Img variant="top" src="sp.jpeg" />
    //                         <Card.Body>
    //                             <Card.Title>Card Title</Card.Title>

    //                             <Card.Text>
    //                                 Some quick example text to build on the card
    //                                 title and make up the bulk of the card's
    //                                 content.
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
    // )
}

export default App
