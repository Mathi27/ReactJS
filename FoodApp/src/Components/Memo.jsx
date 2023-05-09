import React from 'react';
import { useState,useMemo } from 'react';

const PocMemo = () =>{
 const [number , setNumber ]= useState(0);
 const [dark , setDark] = useState(false);
 /// Using the useMemo Hook.
 const doubleNumber = useMemo(()=>{
    return slowFunction(number);
    
 },[number]);


const themeStyles = {
    backgroundColor: dark?'black':'white',
    color: dark ? 'white':'black'
}

return (
    <>  
      
       <input placeholder='Enter a Number' type="number" value={number} onChange={
        
        (e)=>{
            isNaN(e.target.value)?setNumber(null):
            setNumber(parseInt(e.target.value))
        }
        }/>

        <button onClick={()=> setDark(prevDark => !prevDark)}> Change Theme </button>
        <div style={themeStyles}>{number?doubleNumber:"Dont Leave it Blank"}</div>
    </>
)

}

function slowFunction(num){
    console.log("Calling the slow function");
    for(let i=0;i<1000000;i++){}
    return num*2;
}

export default PocMemo;