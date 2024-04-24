
import "./test.css";

function Store(){

    function Vegetabales(props){

        return(
            <>
            <h1>I have the {props.item +" "+props.model}</h1>
            </>
        )
    }

    const vegInfo={ name:"potato",price:"2000",quantity:"1ton"};
    return(
        
        <>
        <div className="r1">
            <h1>What you Vegetables tell me</h1>
            <Vegetabales item={vegInfo.name+" "+vegInfo.price+" "+vegInfo.quantity}  model=" in hyderabad"/>

        </div>
        </>
    )

}
export default Store;