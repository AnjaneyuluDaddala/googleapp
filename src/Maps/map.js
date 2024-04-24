
function Controller(){

    let arr=[12,28,90];
   let list= arr.map((num)=><li>{num}</li>)
   let obj={
    
        color:"green",
    
   }
    return(
        <>
        <ul style={obj}>
           {list}
        </ul>
        </>
    )
}
export default Controller;