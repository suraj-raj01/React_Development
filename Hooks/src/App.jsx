// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const myDec = () => {
//     if (count <= 0) {
//       alert("No negative decreament")
//     }
//     else {
//       setCount(count - 1);
//     }
//   }
//   const [color, setColor] = useState("red");
//   return (
//     <>
//       <div style={{ backgroundColor: 'deepskyblue', margin: "auto", height: '47vh', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         <div><h1>{count}</h1></div>
//         <div>
//           <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={() => setCount((count) => count + 1)}>Increament</button>&nbsp;&nbsp;
//           <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={myDec}>Decreament</button>&nbsp;&nbsp;
//           <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={() => setCount((count) => count * 0)}>Reset</button>
//         </div>
//       </div><hr width="90%" />
//       <div style={{ backgroundColor: color, margin: "auto", height: '48vh', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         <div><h1 style={{ color: 'white' }}>My Favourite Color</h1></div>
//         <div>
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'green', color: 'white' }} onClick={() => { setColor("green") }}>Green</button>&nbsp;&nbsp;
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'deeppink' }} onClick={() => { setColor("deeppink") }}>Pink</button>&nbsp;&nbsp;
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'gold' }} onClick={() => { setColor("gold") }}>Gold</button>&nbsp;&nbsp;
//           <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} onClick={() => { setColor("blue") }}>Blue</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
//==================================================================================================================


// useEffect
// import { useEffect,useState } from "react"
// const App = () =>{
//   // const[cnt,setCount] = useState(0)
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(cnt+1)
//   //   },5000)
//   // })

//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(cnt+1)
//   //   },3000)
//   // },[])   // [] -> Means Dependency


// const[cnt,setCount] = useState(0)
// const [multi,setMulti] = useState(0);
// useEffect(()=>{
//   setMulti(cnt*2)
// },[cnt])

// const [name,setName] = useState("");
// const [city,setCity] = useState("");
// const handleSubmit = () => {
//     console.log({name:name,city:city})
// }
//   return(
//     <>
//     <div style={{backgroundColor:'deepskyblue',margin:'auto',width:'90%',height:'95vh', display:'fles',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
//     <h1>UseEffect</h1>
//     <hr />
//     <h1>Counter : {cnt}</h1>
//     <hr/>
//     <h1>Welcome to Cybrom Bhopal</h1>
//     <h2>My Counter : {cnt}</h2>
//     <h2>Multiplication : {multi}</h2>
//     <button onClick={()=>{setCount(cnt+1)}}>Click Here</button>
//     <br/>
//     <h1>Application Form</h1>
//     Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
//     Enter Name : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /><br/><br/>
//     <button onClick={handleSubmit}>Submit Data</button>
//     </div>
//     </>
//   )
// }
// export default App;



// install axios for post data in react

import { useState } from "react";
import axios from "axios";
const App = () =>{
  const[input,setInput] = useState({});
  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput((values)=>({...values,[name]:value}))
    console.log(input)
  }
const handleSubmit=()=>{
  let api = "http://localhost:3000/Student";
  axios.post(api,input).then((res)=>{
    console.log(res);
    alert("data Saved!!!")
  })
}
  return(
    <>
    <div style={{margin:'100px auto',height:'55vh', width:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'5px',backgroundColor:'black',color:'gray',boxShadow:'0px 0px 10px',borderRadius:'10px'}}>
    Enter Roll no: <input type="text" name="rollno" value={input.rollno} onChange={handleInput} />
    Enter Name: <input type="text" name="name" value={input.name} onChange={handleInput} />
    Enter City: <input type="text" name="city" value={input.city} onChange={handleInput} />
    Enter Fees: <input type="text" name="fees" value={input.fees} onChange={handleInput} />
    <br/>
    <button style={{padding:'6px'}} onClick={handleSubmit}>Data Submit</button>
    </div>
    </>
  )
}
export default App;