import { useState } from "react";
import axios from "axios";
const App = () =>{

const[input,setInput] = useState({});
const handleInput=(e)=>{
  let name = e.target.name;
  let value = e.target.value;
  setInput((values)=>({...values,[name]:value}));
  alert(input);
}
handleSubmit = () =>{
  let api = "http://localhost:3000/Student";
  axios.post(api,input).then((res)=>{
    console.lot(res);
    alert("data saved");
  })
}

  return(
    <>
    Enter Rollno: <input type="text" name="rollno" value={input.rollno} onChange={handleInput}  />
    Enter Name: <input type="text" name="name" value={input.name} onChange={handleInput}  />
    Enter address: <input type="text" name="address" value={input.address} onChange={handleInput}  />
    Enter fees: <input type="text" name="fees" value={input.fees} onChange={handleInput}  />
    <button onClick={handleSubmit}>Submit Data</button>
    </>
  )
}
export default App;