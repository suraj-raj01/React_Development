import Comp1 from "./Comp1";
import { useState,createContext } from "react";
const userContext = createContext();
const App = () =>{
const [msg,setMsg] = useState("Frontend Developer");
  return(
    <>
    <h1>Message : {msg}</h1>
    <button onClick={()=>{setMsg("Backend Developer")}}>Click Here</button>
    <userContext.Provider value={{msg,setMsg}}>
      <Comp1/>
    </userContext.Provider>
    </>
  )
}
export default App;
export {userContext};