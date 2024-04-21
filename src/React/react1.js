import "./index.css";
function Garage(){
    let c="green";
    let w="400kg";
    let b="Nissan";
    let s="120km/hr"

    let obj={
        backgroundColor:"green"
    }
    function Car(props){
        
        return (
          <>
          <h1>Hi  I am {props.brand}</h1>
          <h2>My color is {props.color}</h2>
          <h3>My speed is {props.speed}</h3>
          <h4>My weight is {props.weight}</h4>
          </>
        )
      
      }
    return(
       
    <>
    <body style={obj}>
    <div className="main">
    <h1>Hii my members introduce yourself</h1>
    <div className="r1">
    <Car brand={b}  weight={w} speed={s} color={c}/>
    </div>
    </div>
    </body>
    </>
    )
  }
export default Garage;