import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./ColorSlice";
import { useState } from "react";
const App = () => {
  const bgcolor = useSelector((state) => state.bgcolor.color);
  const dispatch = useDispatch();
  const [val,setVal] = useState("");
  return (
    <>
      <h1>Welcome to Toolkit Example</h1>
      <input type="text" value={val}  onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={() => { dispatch(changeColor(val)) }}>Change Color</button>
      <br />
      <br />
      <div style={
        {
          height: '500px',
          width: '500px',
          backgroundColor: bgcolor,
          border:'1px solid'
        }
      }>
      </div>
    </>
  )
}
export default App;