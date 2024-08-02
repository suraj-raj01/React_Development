import Comp2 from "./Comp2";
const Comp1 = ({user}) =>{
    return(
        <>
        <h1>Comp1</h1>
        <Comp2 user={user}/>
        </>
    )
}
export default Comp1;