import LoginBtn from "./LoginBtn";

const Layout = () =>{
    return(
        <>
        <div style={
            {
                height:'10vh',
                width:'100%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'teal',
                color:'white'
            }
        }>
        <h2>Header</h2>
        </div>
        <br/>
        <div style={
            {
                height:'73vh',
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                color:'white',  
                gap:'30px'
            }
        }>
        <LoginBtn/>
        </div>
        <br/>
        <div style={
            {
                height:'10vh',
                width:'100%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'teal',
                color:'white'
            }
        }>
        <h2>Footer</h2>
        </div>
        </>
    )
}
export default Layout;