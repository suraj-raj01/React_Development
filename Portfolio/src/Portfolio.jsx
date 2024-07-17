import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Portfolio = () => {
    return (
        <>
            <div style={{backgroundColor:'darkslategrey',color:'white',height:'75vh'}}>
                <br />
                <center><h1>My Portfolios</h1></center>
                <br /><br />
                <Container id='portfolio'>
                    <Row md={4} style={{ margin: '20px auto' }}>
                        <Col ><Card style={{ width: '18rem', backgroundColor: 'darkslategrey', color: 'white', borderRadius: '10px', boxShadow: '0px 0px 2px black' }}>
                            <img src='/Images/petstore.png' />
                            <Card.Body>
                                <Card.Title>Pet Store</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">GitHub Code</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col ><Card style={{ width: '18rem', backgroundColor: 'darkslategrey', color: 'white', borderRadius: '10px', boxShadow: '0px 0px 2px black' }}>
                            <img src='/Images/portfolio.png' />
                            <Card.Body>
                                <Card.Title>Personal Portfolio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">GitHub Code</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col ><Card style={{ width: '18rem', backgroundColor: 'darkslategrey', color: 'white', borderRadius: '10px', boxShadow: '0px 0px 2px black' }}>
                            <img src='/Images/dashboard.png' />
                            <Card.Body>
                                <Card.Title>User Dashboard</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">GitHub Code</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col ><Card style={{ width: '18rem', backgroundColor: 'darkslategrey', color: 'white', borderRadius: '10px', boxShadow: '0px 0px 2px black' }}>
                            <img src='https://shots.codepen.io/craigwfox/pen/eEZgoJ-800.jpg?version=1501521886' />
                            <Card.Body>
                                <Card.Title>React Development</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">GitHub Code</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
                <br/>
            </div>
        </>
    )
}
export default Portfolio;