import "./dest.css";
function Management(){
    let obj={
        // backgroundColor: "darksalmon",
        backgroundColor: "yellow"
    };
   
    let Stime=new Date().toDateString();
    var Etime=new Date(2024,4,25).toDateString();
    return(
        
        <>
        <body style={obj}>
        <div className="main">
            <h1>Welcome to Event management</h1>
            <div className="r1">
            <Event name="freshersEvent"  city="hyderabad" time={Stime} time1={Etime}/>
            </div>
        </div>
        </body>
        </>
    )


    function Event({name ,city ,time,time1}) {
     
        return (
            <>
            <div >
                <h2>Name of event :<span className="s">{name}</span> </h2>
                <h3>Place :<span className="s">{city}</span> </h3>
                <h4>Start at :<span className="s">{time}</span> </h4>
                <h4>End at :<span className="s">{time1}</span> </h4>
            </div>
            </>
        )
        
    }
}
export default Management;