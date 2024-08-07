import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { userContext } from "./LoginContext";
const App =() =>{
  const {user} = useContext(userContext);
  return(

    <>
    {user.auth?<AuthApp/>:<UnAuthApp/>}
    </>
  )
}
export default App;