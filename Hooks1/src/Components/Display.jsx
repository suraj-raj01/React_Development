import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useEffect,useState } from "react";
const Display = () =>{

    const [myData,setMydata] = useState([]);
    const loadData = () =>{
        let url = "http://localhost:3000/Student";
        axios.get(url).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans = myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.id}</td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <div style={{backgroundColor:'',width:'100%',height:'100%',textAlign:'center',color:'black',borderRadius:'10px',padding:'15px 20px'}}>
        <h2 style={{position:'sticky',top:'15px',backgroundColor:'white'}}>DISPLAY DATA</h2>
        <Table striped bordered hover id='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
        </div>
        </>
    )
}
export default Display;