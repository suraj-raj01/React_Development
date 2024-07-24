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
            console.log(res.data);
            alert("data saved!!!")
        })
    }
    return (
        <>
            <Container style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '',borderRadius:'10px' }}>
                <Form id='form' style={{ margin: ' 200px auto', width: '400px', color: 'black'}}>
                    <center><h3 style={{ padding: '0px 20px' }}>INSERT DATA</h3></center><br />
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='id' placeholder="enter id" value={input.id} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='rollno' placeholder="enter rollno" value={input.rollno} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='name' placeholder="enter name" value={input.name} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='city' placeholder="enter city" value={input.city} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='fees' placeholder="enter fees" value={input.fees} onChange={handleInput} />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default Insert;