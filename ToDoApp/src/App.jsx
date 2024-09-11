import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { addTask,recDelete,complete,uncomplete,editsavedata } from "./todoSlice";
import { useState } from "react";
import { Container } from "react-bootstrap";
const App = () =>{
  const [mytsk,setMytsk] = useState("");
  const [editBtn,setEditBtn] = useState(true);
  const [editId,setEditId] = useState("")
  const mywork = useSelector((state)=>state.todo.task);
  const dispatch = useDispatch();
  console.log(mywork);
  const recdelete = (id) =>{
    dispatch(recDelete(id))
  }
  const taskComplete = (id)=>{
    dispatch(complete(id))
  }
  const taskUnComplete = (id)=>{
    dispatch(uncomplete(id))
  }
  const editData = (id,work) =>{
    setMytsk(work);
    setEditBtn(false)
    setEditId(id)
  }
  const editSave = () =>{
    dispatch(editsavedata({id:editId, work:mytsk}))
    setEditBtn(true);
    setMytsk(mytsk)
    setEditId(editId)
  }
  let sno = 0;
  const ans = mywork.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.status?(<span style={{textDecoration:"line-through",color:'green',fontWeight:'bold'}}>{key.work}</span>):key.work}</td>
        <td><button onClick={()=>{recdelete(key.id)}}>Delete</button></td>
        <td>
          {key.status?(<button onClick={()=>taskUnComplete(key.id)}>Incomplete</button>):(<button onClick={()=>taskComplete(key.id)}>Completed</button>)}
        </td>
        <td><button onClick={()=>{editData(key.id,key.work)}}>Edit Data</button></td>
      </tr>
      </>
    )
  })

  return(
    <>
    <Container>
    <h1>To Do App</h1>
    Enter your Task : <input type="text" value={mytsk} onChange={(e)=>{setMytsk(e.target.value)}}/>
    {editBtn?(
      <button onClick={()=>{dispatch(addTask({id:Math.random()*100, work:mytsk, status:false}))}}>Add Task</button>
    ):(
      <button onClick={editSave}>Save Data</button>
    )}
    
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
        <th>Update</th>
        <th>Complete / Incomplete</th>
        <th>
          Update
        </th>
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