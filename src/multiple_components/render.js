//7403

function FruitList(props){

    function FruitItem(props){

        return(
            <li>{props.fruit}</li>
        );

    }
   
    const fruitsAll=props.fruits.map((fruit)=>(
        <FruitItem key={fruit.id} fruit={fruit} />
    ))

    return(
     <ul>{fruitsAll}</ul>
    )


  
};
export default FruitList;