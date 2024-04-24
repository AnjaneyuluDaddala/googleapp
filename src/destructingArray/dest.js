function Vechiles() {

    function Car(props) {

        return (
            <>
            <li>{props.brand}</li>
            </>
        )
        
    }

    const cars=["BMW","AUDI","FERRRI"];

   return (
    <>
    <ul>
        {cars.map((item)=><Car brand={item} />)}
    </ul>
    </>
   )   
}
export default Vechiles;