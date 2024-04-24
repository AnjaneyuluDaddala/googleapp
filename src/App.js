import Controller from "./Maps/map"
import Vechiles from "./destructingArray/dest";
import FruitList from "./multiple_components/render";
function App() {

    const data=[
        
        { id:1,name:"orange"},
        { id:2,name:"Apple"},
        { id:3,name:"grapes"},
        
    ];

    return(
        <>
        <Controller />
        <Vechiles />
        <FruitList fruits={data} />
        </>
    )
    
}
export default App;