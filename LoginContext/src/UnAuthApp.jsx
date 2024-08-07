import { useState,useContext } from "react";
import { userContext } from "./LoginContext";
const UnAuthApp = () =>{
    const [nmval,setNmval] = useState("");
    const {userlogin} = useContext(userContext);
    return(

        <>
        <h1>Login Form</h1>
        <input placeholder=" enter your name" type="text" value={nmval} onChange={(e)=>{setNmval(e.target.value)}} />
        <button onClick={()=>{userlogin(nmval)}}>Login</button>
        </>
    )
}
export default UnAuthApp;