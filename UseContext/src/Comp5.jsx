import { useContext } from "react";
import { userContext } from "./App";
const Comp5 = () =>{
    // const {user} = useContext(userContext);
    const {course,setCourse} = useContext(userContext);
    return(
        <>
        <h1>Comp 5 {course}</h1>
        <button onClick={()=>{setCourse("java")}}>click here</button>
        </>
    )
}
export default Comp5;