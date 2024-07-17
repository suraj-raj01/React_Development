import {Link,Outlet} from "react-router-dom";
const Layout = () =>{
    return(
        <>
        <div id="navbar">
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        </div>
        <div id="outlet">
            <Outlet/>
        </div>
        <div id="footer">
            <p>@Copyright By SURAJ <br/> Everything is reserved by @Copyright SURAJ</p>
        </div>
        </>
    )
}
export default Layout;