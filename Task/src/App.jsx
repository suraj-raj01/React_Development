import { useState } from "react";
import Comp1 from "./Comp1";
const App = () => {
  const [user, setUser] = useState("SURAJ")
  return (
    <>
      <h1>App : {user}</h1>
      <Comp1 user={user} />
    </>
  )
}
export default App;