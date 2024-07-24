import {useState} from "react";
import  axios from "axios";
import Table from "react-bootstrap/Table";
const Search = () =>{
    const[rollno,setRollno] = useState("");
    const[mydata,setMydata] = useState([]);
    const mySearch = () =>{
        let url = `http://localhost:3000/Student?rollno=${rollno}`
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });
    }
    const ans = mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return(
        <div style={{backgroundColor:'',width:'100%',height:'100%',textAlign:'center',color:'black',borderRadius:'10px',padding:'15px 20px'}}>
        <h2>SEARCH DATA</h2><br/>
        <input id="search" type='text' placeholder='enter rollno...' value={rollno} onChange={(e)=>{
            setRollno(e.target.value)
        }}/>
            <button id="search-btn" onClick={mySearch}>Search</button><br/>
            <hr/>

            <Table striped bordered hover id='table'>
                <thead>
                <tr>
                    <th>Rollno</th>
                    <th>name</th>
                    <th>city</th>
                    <th>fees</th>
                </tr>
                </thead>
                <tbody>
                {ans}
                </tbody>
            </Table>
        </div>
    )
}
// for search in json we have to run command url/?name="value".
export default Search;