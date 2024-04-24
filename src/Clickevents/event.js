function Shooting() {

   const shoot=()=>{
    alert("shooted")
   }
   let obj={
    backgroundColor:"red",
    padding:"4px",
    borderRadius:"5px",
    boder:"2px solid green"
   }

   return (
    <button onClick={shoot} style={obj}>Click here</button>

   )
    
}
export default Shooting;