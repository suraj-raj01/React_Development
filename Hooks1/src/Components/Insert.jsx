import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const Insert = () => {
    const [input, setInput] = useState({});
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
        console.log(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let api = "http://localhost:3000/Student";
        axios.post(api, input).then((res) => {
            console.log(res);
            alert("data saved!!!")
        })
    }
    return (
        <>
            <Container style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <Form style={{ margin: ' 200px auto', width: '400px', color: 'white' }}>
                    <center><h3 style={{ padding: '0px 20px' }}>INSERT DATA</h3></center><br />
                    <Form.Group className="mb-3">
                        <Form.Label>Enter rollno</Form.Label>
                        <Form.Control type="text" name='rollno' value={input.rollno} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter name</Form.Label>
                        <Form.Control type="text" name='name' value={input.name} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter city</Form.Label>
                        <Form.Control type="text" name='city' value={input.city} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter fees</Form.Label>
                        <Form.Control type="text" name='fees' value={input.fees} onChange={handleInput} />
                    </Form.Group>

                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default Insert;