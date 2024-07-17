import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Outlet } from 'react-router-dom';
const Contact = () => {
  return (
    <>
      <Container id='contact'>
        <br /><br />
        <Row>
          <Col xs={4}>
            <div style={{color:'white'}}>
              <center><h2>Contact Us</h2></center>
              <br />
              <Form id='form'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="number" placeholder="Enter contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <textarea placeholder='Comment?' name="" id="textarea" style={{ width: '400px', height: '100px' }}></textarea>
                <p id='forgot'>forgot password</p>
                <Button variant="success">Submit </Button>{' '}&nbsp;&nbsp;
                <Button variant="primary" style={{ padding: '6px 20px' }}> Clear </Button>{' '}
              </Form>
            </div>
          </Col>
          <Col xs={1}>

          </Col>
          <Col>
            <div id='content'>
               <div id='box1'>
                  <Link to="aboutproduct">About Product</Link>
                  <Link to="aboutcompany">About Company</Link>
               </div>
               <div id='box2'><hr/>
                  <Outlet/>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Contact;