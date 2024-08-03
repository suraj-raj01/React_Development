import { useState ,createContext} from "react";
import Comp1 from "./Comp1";
const userContext = createContext();
const App = () => {
  // const [user, setUser] = useState("SURAJ")
  const [course, setCourse] = useState("backend")
  return (
    <>
      <h1>App : {course}</h1>
      <button onClick={()=>{setCourse("Frontend")}}>click here</button>
      <userContext.Provider value={{course,setCourse}}>
        <Comp1/>
      </userContext.Provider>
    </>
  )
}
export default App;
export {userContext};