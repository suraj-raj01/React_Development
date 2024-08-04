import { useContext } from "react";
import { userContext } from "./App";
const Comp3 = () =>{
    const{msg,setMsg} = useContext(userContext);
    return(
        <>
        <h1>Message : {msg}</h1>
        <button onClick={()=>{setMsg("Java Fullstack")}}>Click Here</button>
        </>
    )
}
export default Comp3;