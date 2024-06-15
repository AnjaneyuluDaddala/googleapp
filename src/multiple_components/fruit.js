//7403

//Sub Component
function FruitItem(props){

    return(
        <li>{props.fruit}</li>
    );

}

//main component -1
function FruitList1(props){
   
    const fruitsAll=props.fruits.map((f)=>
        <FruitItem key={f.id} fruit={f.name} />
    )
    
    return(
     <ul>{fruitsAll}</ul>
    ) 
};


//   or
//  main component-2

function FruitList(props){
   
    const fruitsAll=props.fruits.map((id,name)=>
        <FruitItem key={id} fruit={name} />
    )
    
    return(
     <ul>{fruitsAll}</ul>
    ) 
};

export default FruitList;