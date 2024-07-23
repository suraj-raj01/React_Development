import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Layout = () => {
    return (
        <>
            <Navbar id="navbar">
                <Container style={{fontWeight:'bold'}}>
                    <Navbar.Brand as={Link} to="home">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="search">Search</Nav.Link>
                        <Nav.Link as={Link} to="modify">Modify</Nav.Link>
                        <Nav.Link as={Link} to="display">Display</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container >
                <hr />
                <div id='layout' style={{ height: '75vh', width: '100%',boxShadow:'0px 0px 5px',borderRadius:'10px' }}>
                    <Outlet />
                </div>
                <hr />
            </Container>

            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Row>
                    <Col ></Col>
                    <Col xs={12}><p>Everythig is reserved by Copyright ©studentmanagementsystem.com</p></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}
export default Layout;