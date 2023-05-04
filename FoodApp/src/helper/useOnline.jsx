import { useState , useEffect } from 'react';

const useOnline = () => {
   const [isOnline , setisOnline] = useState(true);
  
   const OnlineHandler = () =>{
      setisOnline(true);
   }

   const OfflineHandler = () => {
      setisOnline(false);
   }
   

   useEffect(()=>{
    window.addEventListener("online",OnlineHandler);
    window.addEventListener("offline",OfflineHandler);

    return ()=> {
      window.removeEventListener("offline",OnlineHandler);
      window.removeEventListener("offline",OfflineHandler);
  }
   },[]);

   // useOnline is a custom hook
  

    return isOnline;

}

export default useOnline;



/* 
Chunking
Code Splitting
Dynamic Bundling
Lazy Loading
On Demand Loading
Dynamic Import
*/