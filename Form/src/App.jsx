
const [color,setColor] = useState("green");

const App = () =>{
  // const [cnt,setCnt] = useState(0);
// const myDec = () =>{
//   if(cnt<=0)
//   {
//     alert("No negative decreament")
//   }
//   else{
//     setCnt(cnt-1);
//   }
// }
  return(
    <>
    <h1 style={{color:color}}>My Favourite Color is : {color}</h1>
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>{setColor("Red")}}>Red</button>
    {/* <h2>Count : {cnt}</h2>
    <button onClick={()=>{setCnt(cnt+1)}}>Increament</button>
    <button onClick={(myDec)=>{setCnt(cnt-1)}}>Decreament</button>
    <button onClick={()=>{setCnt(cnt+2)}}>Increament</button>
    <button onClick={myDec}>Decreament</button> */}
    </>
  )
}
export default App;

