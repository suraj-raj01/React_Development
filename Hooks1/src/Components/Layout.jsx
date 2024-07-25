import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {

    return (
        <>
            <Navbar id="navbar">
                <Container style={{fontWeight:'500'}}>
                    <Navbar.Brand as={Link} to="home" style={{fontSize:'25px'}}>Database</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="search">Search</Nav.Link>
                        <Nav.Link as={Link} to="update">Update</Nav.Link>
                        <Nav.Link as={Link} to="display">Display</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button id='btn'><img src="https://cdn1.iconfinder.com/data/icons/youtube-23/30/Subtract-4-512.png" height='25' width='25'/></Button> &nbsp;&nbsp;&nbsp;
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <br/>
                <div id='layout' style={{height: '75vh', width: '100%',border:'1px solid skyblue',borderRadius:'10px' }}>
                    <Outlet />
                </div>
                {/*<hr />*/}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign:'center' }}>

                <Row>
                    <Col ></Col>
                    <Col xs={12}>
                        <p>STUDENT MANAGEMENT SYSTEM <br/>Everythig is reserved by Copyright ©studentmanagementsystem.com
                        </p></Col>
                    <Col></Col>
                </Row>
            </div>
        </>
    )
}
export default Layout;