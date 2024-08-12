import { useContext, useState } from "react";
import { userContext } from "./App";
const Comp3 = () => {
    const { msg, setMsg } = useContext(userContext);
    const [val, setVal] = useState("");
    return (
        <>
            {/* <h1>Message : {msg}</h1> */}
            {/* <button onClick={()=>{setMsg("Java Fullstack")}}>Click Here</button> */}
            Enter Color: <input type="text" value={val} onChange={(e) => { setVal(e.target.value) }} />
            <button onClick={() => { setMsg(val) }}>Click Here</button>
            <br /><br />
            <div style={{ height: '500px', width: '100%', backgroundColor: msg }}>
            </div>
        </>
    )
}
export default Comp3;