import "./event"
function Ball(){

    const shoot=(a)=>{
        alert(a)

    }
    const shoot1=(a,b)=>{
        alert(a,b)

    }
    let obj={
        backgroundColor:"red",
        padding:"4px",
        borderRadius:"5px",
        boder:"2px solid green"
       }
       let obj1={
        backgroundColor:"green",
        marginTop:"20px",
        padding:"10px"
       }



    return(
        <div style={obj1}>
        <h1>Play the Match :</h1>
        <button onClick={()=>shoot("Goal!")}  style={obj}>Take the one Shoot</button>

        <div className="r1">
        <h1>Play the another Match :</h1>
        <button onClick={(event)=>shoot1("not Goal",event)}  style={obj}>Take the second Shoot</button>
        </div>


        </div>



    )
}
export default Ball;