import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout';
import Home from "./Components/Home";
import Insert from "./Components/Insert";
import Search from "./Components/Search";
import Modify from "./Components/Modify";
import Container from "react-bootstrap/esm/Container";
import Display from "./Components/Display";
const App = () =>{
  return(
    <>
    <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="modify" element={<Modify/>}/>
          <Route path="display" element={<Display/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Container>

    </>
  )
}
export default App;