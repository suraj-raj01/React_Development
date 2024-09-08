import {useDispatch,useSelector } from "react-redux";
import { increament,decreament,reset } from "./CounterSlice";
const App = () =>{
const dispatch = useDispatch();
const count = useSelector((state)=>state.counter.count)
  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(increament())}}>Increament</button>
    <button onClick={()=>{dispatch(decreament())}}>decreament</button>
    <button onClick={()=>{dispatch(reset())}}>reset</button>
    </>
  )
}
export default App;