import Comp3 from "./Comp3";
const Comp2 = ({user}) =>{
    return(
        <>
        <h1>Comp2 </h1>
        <Comp3 user={user}/>
        </>
    )
}
export default Comp2;