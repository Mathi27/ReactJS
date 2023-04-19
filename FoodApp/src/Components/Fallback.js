import React from "react";
import { useRouteError } from "react-router-dom";
const FallBack = ()=>{
    const err = useRouteError();
    console.log(err);
   return (
     <div>
         <h1>This is the fall back User Interface</h1>
        <p>OOPS .... try again</p>
        <h2>{err.status} : {err.statusText}</h2>
        <p>{err.data}</p>
        <p>Go back to <a href="/">Home</a></p>
     </div>
   ) 
}
export default FallBack;