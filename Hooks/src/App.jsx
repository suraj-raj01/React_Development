import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const myDec = () => {
    if (count <= 0) {
      alert("No negative decreament")
    }
    else {
      setCount(count - 1);
    }
  }
  const [color, setColor] = useState("red");
  return (
    <>
      <div style={{ backgroundColor: 'deepskyblue', margin: "auto", height: '47vh', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div><h1>{count}</h1></div>
        <div>
          <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={() => setCount((count) => count + 1)}>Increament</button>&nbsp;&nbsp;
          <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={myDec}>Decreament</button>&nbsp;&nbsp;
          <button style={{ padding: '10px 20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px' }} onClick={() => setCount((count) => count * 0)}>Reset</button>
        </div>
      </div><hr width="90%" />
      <div style={{ backgroundColor: color, margin: "auto", height: '48vh', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div><h1 style={{ color: 'white' }}>My Favourite Color</h1></div>
        <div>
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'green', color: 'white' }} onClick={() => { setColor("green") }}>Green</button>&nbsp;&nbsp;
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'deeppink' }} onClick={() => { setColor("deeppink") }}>Pink</button>&nbsp;&nbsp;
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'gold' }} onClick={() => { setColor("gold") }}>Gold</button>&nbsp;&nbsp;
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} onClick={() => { setColor("blue") }}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
//==================================================================================================================

