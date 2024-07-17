import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <>
            <div style={{ backgroundColor: 'darkslategrey', color: 'white', height: "75vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container id='details'>
                    <br /><br /><br />
                    <br />
                    <br />
                    <Row >
                        <Col md={1}>
                            
                        </Col>
                        <Col>
                            <Image src="https://mrcreditsolutions.com/wp-content/uploads/2017/06/Cartoonstandalone.png" rounded style={{ height: '380px' }} />
                        </Col>
                        <Col md={6}>
                            <br />
                            <h2>About Me ____________________________________________</h2><br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea, est ad, eius, accusantium deserunt libero delectus repudiandae at sed doloremque tempora velit ducimus quia nesciunt molestias nobis quas commodi. Explicabo sint a pariatur officiis quis porro inventore velit neque esse dolor. Culpa ratione, voluptatum in, quidem dolorum totam nihil animi, maxime ullam sequi et iusto assumenda eveniet fuga? Ea.
                            </p><br />
                            <Button variant='primary'>Download Resume</Button>
                        </Col>

                    </Row>
                    <br /><br />
                    <br /><br />
                    <hr />
                </Container>
            </div>
        </>
    )
}
export default About;