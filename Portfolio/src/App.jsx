import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Container from "react-bootstrap/esm/Container";
import AboutProduct from "./AboutProduct";
import AboutCompany from "./AboutCompany";

const App = () =>{
  return(
    <>
    <Container>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}>
          <Route index element={<AboutProduct/>}/>
          <Route path="aboutproduct" element={<AboutProduct/>}/>
          <Route path="aboutcompany" element={<AboutCompany/>}/>
        </Route>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Container>
    </>
  )
}
export default App;