function Bike(){
    var x=5;

    //if and else conditions
    let text;
    
    if(x<10){
        text="growing..."
    }else{
        text="hello world"
    }
    // ternary operator usage..
    const element= x<10?"Growing...":"hello world";
 
    return(

        
        <div className="r1">
            <h1 >Heloo bike= {2+3}</h1>
            <p>bike is increadible to ride in multiple places </p>
            <h2>{element}</h2>
            <h3>{text}</h3>

        </div>
 
    );
}
export default Bike;