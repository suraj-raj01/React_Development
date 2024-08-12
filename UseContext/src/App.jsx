// import Comp1 from "./Comp1";
// import { useState, createContext } from "react";
// const userContext = createContext();
// const App = () => {
//   const [msg, setMsg] = useState("aqua");
//   return (
//     <>
//       {/* <h1>Message : {msg}</h1> */}
//       <button onClick={() => { setMsg("blue") }}>Click Here</button>
//       <userContext.Provider value={{ msg, setMsg }}>
//         <Comp1 />
//       </userContext.Provider>
//     </>
//   )
// }
// export default App;
// export { userContext };

import {useContext} from "react";
import { myContext } from "./ColorContext";
const App = () =>{
  const [color,setColor] = useContext(myContext);
  return(
    <>
    <button onClick={()=>{setColor("red")}}>Click Here</button>
    <h1 style={{color:color}}>HELLO BHOPAL</h1>
    </>
  )
}
export default App;