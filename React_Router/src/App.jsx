// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Components/Layout";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";

// function display(){
//   alert("Welcome to Cybrom")
// }
// const sum = (a,b) => {
//   alert(a+b)
// }
// const myName=(nm,e)=>{
//   alert("My name is: "+nm + " Type : "+e.type)
// }

// const myDisplay = (e) =>{
//   alert("Welcome \nName : "+e.target.name+"\nValue : "+e.target.value+"\nType: "+e.target.type);
// }
// const handleClick = (e) =>{
//   let name = e.target.name;
//   let val = e.target.value;
//   alert("Name : "+name+" \nValue : "+val);
// }

// const App = () => {

//   return (
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//           <Route index element={<Home/>}/>
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />}/>
//           </Route>
//         </Routes>
//       </BrowserRouter> */}
//       <h1>Welcome to Cybrom</h1>
//       <button onClick={display}>click</button><br/><br/>
//       <button onClick={()=>{sum(20,10)}}>name</button><br/><br/>
//       <button onMouseEnter={(e)=>{myName("Suraj",e)}}>Click Here</button><br/><br/>
//       <button name="btn1" value="mybtn" type="button" onClick={myDisplay}>Click here</button><br/><br/>
//       <input type="text" name="city" value="Bhopal" onClick={handleClick}/>
//     </>
//   )
// }
// export default App;


const { useState } = require("react")
// const [color,setColor] = useState("green");
const [cnt,setCnt] = useState(0);
const myDec = () =>{
  if(cnt<=0)
  {
    alert("No negative decreament")
  }
  else{
    setCnt(cnt-1);
  }
}
const App = () =>{
  return(
    <>
    {/* <h1 style={{color:color}}>My Favourite Color is : {color}</h1>
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>{setColor("Red")}}>Red</button> */}
    <h2>Count : {cnt}</h2>
    <button onClick={()=>{setCnt(cnt+1)}}>Increament</button>
    <button onClick={myDec}>Decreament</button>
    </>
  )
}
export default App;