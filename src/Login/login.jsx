import { useState } from "react";

const Login=()=>{

    const[isLoggedin,setIsLogin]=useState(false);

    function handleLoggin(){
       setIsLogin(true)
    };
    function handleLoggout(){
       setIsLogin(false)
    };

    return(

        <div className="container mt-4">
            {isLoggedin?(
                <div>
                    <h1>Welcome To Home</h1>
                    <button type="button" onClick={handleLoggout}>Logout</button>
                </div>
            ):(
                <div>

                    <h1>Please Login</h1>
                    <button type="button" onClick={handleLoggin}>Login</button> 
                </div>
            )

          }
          </div>
        
    )
}
export default Login;