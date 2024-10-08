import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
   
    return (
        <>
            <div>
                <Navbar expand="lg" id='navbar'>
                    <Container fluid>
                        <Navbar.Brand as={Link} to="home" style={{ fontWeight: 'bold' }}>Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '300px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="home">Home</Nav.Link>
                                <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                                <Nav.Link as={Link} to="search">Search</Nav.Link>
                                <Nav.Link as={Link} to="update">Update</Nav.Link>
                                <Nav.Link as={Link} to="display">Display</Nav.Link>
                            </Nav>

                            <Form className="d-flex">
                                <Form.Control
                                    className="me-2"
                                    aria-label="Search"
                                    placeholder="Search"
                                    type="search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br />
                <div id='layout' style={{ height: '75vh', width: '100%', border: '1px solid skyblue', borderRadius: '10px' }} >
                    <Outlet />
                </div>
                {/*<hr />*/}

                <div style={{ fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Row>
                        <Col ></Col>
                        <Col xs={12}>
                            <p>DASHBOARD <br />Everythig is reserved by Copyright ©mydashboard.com
                            </p></Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Layout;