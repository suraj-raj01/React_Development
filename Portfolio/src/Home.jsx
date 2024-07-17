import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: 'darkslategrey', color: 'white', height: "75vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container id='home'>
          <br />
          <Row >
            <Col md={1}>
            </Col><Col>
              <Image src="https://mrcreditsolutions.com/wp-content/uploads/2017/06/Cartoonstandalone.png" rounded style={{ height: '380px' }} />
            </Col>
            <Col md={6}>
              <br />
              <h2>HELLO 👋</h2>
              <h2>IT'S SURAJ KUMAR</h2>
              <p>I'm an Engineering Student, Pursuing B.Tech with CSE Stream <br /> From RNTU (Rabindra Nath Tagore University Bhopal (MP)).</p>
              <p>Currently I'm Preparing for Full stack Development with Java</p><br />
              <Button variant="primary">More About Me</Button>{'  '}&nbsp;&nbsp;
              <Button variant='success'>Download Resume</Button><br /><br />
              <div id='icon'>
                <FaFacebook />
                <FaInstagram />
                <FaGithub />
                <FaLinkedin />
              </div>
            </Col>
            
          </Row>
          <br /><br />
        </Container>
      </div>
    </>
  )
}
export default Home;