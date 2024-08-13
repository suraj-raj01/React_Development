import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { addTask } from "./todoSlice";
import { useState } from "react";
import { Container } from "react-bootstrap";
const App = () =>{
  const [mytsk,setMytsk] = useState("");
  const mywork = useSelector((state)=>state.todo.task);
  const dispatch = useDispatch();
  console.log(mywork);
  let sno = 0;
  const ans = mywork.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <Container>
    <h1>To Do App</h1>
    Enter your Task : <input type="text" value={mytsk} onChange={(e)=>{setMytsk(e.target.value)}}/>
    <button onClick={()=>{dispatch(addTask({id:Date.now(), work:mytsk}))}}>Add Task</button>
    <br /><br /><br />

    <div style={
      {
        height:'80vh',
        width:'100%',
        overflowY:'scroll'
      }
    }>
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>Sno</th>
        <th>Your Task</th>
      </tr>
      {ans}
      </thead>
      </Table>
    </div>
    </Container>
    </>
  )
}
export default App;