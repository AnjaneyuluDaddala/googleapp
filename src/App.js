import Controller from "./Maps/map"
import Vechiles from "./destructingArray/dest";
import FruitList from "./multiple_components/fruit";
import Cart from "./AddtoCartIncrement/incre";
import Login from "./Login/login";
import Store from './CarInfo/test';
import Shooting from './Clickevents/event';
import Ball from './Clickevents/event1';
function App() {
    const list = [
        { id: 1, name: 'apple' },
        { id: 2, name: 'orange' },
        { id: 3, name: 'blueberry' },
        { id: 4, name: 'banana' },
        { id: 5, name: 'kiwi' },
       ];
   
    return(
        <>
        <Store/>
        <Shooting/>
        <Ball/>
        <Controller />
        <Vechiles />
        <FruitList fruits={list}/> 
        
        {/* <Cart/> */}
        <Login />
        
        
        
        </>
    )
    
}
export default App;