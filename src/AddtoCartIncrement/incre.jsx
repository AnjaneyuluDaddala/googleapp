import { useState } from "react";
import "./cart.css";
import watch from "./Images/watch.png";

function  Cart() {

     const [count,setCount]=useState(0);

     function increse(){
        setCount(count+1);
     }
     function decrease(){
        if(count<1){

        }else{
            setCount(count-1);
        }
          
     }
    
     return(
      <section className="mb-4 " >
        <div className="container">
         <div className="card">
            <img src={watch} alt="loading" className="card-img-top"/>
            <div className="card-body">
            <button onClick={increse} className="btn btn-primary mx-2"> + </button>
            <h3>{count}</h3>
            <button onClick={decrease} className="btn btn-primary mx-3"> - </button>
            </div>
         </div>
            
        </div>
       
        </section>
     )
    
}
export  default Cart;