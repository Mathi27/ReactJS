import RestroCard from "./RestroCard";
import { useEffect, useState } from 'react'; 
import axios from "axios";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import useOnline from "../helper/useOnline";
import NetworkChecker from "./InternetHandler";
  
const Body = () =>{
   // avoid rendering a component

  const [listOfrestaurant,setrestaurant]=useState(undefined);
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    console.log("render")
  useEffect( () => {
    getSwiggyDetails();
  },[]);

 useEffect( ()=>{
   console.log("The Restro card is updated in the user interface")
},[]);

 async function getSwiggyDetails(){
        // Api Call from Swiggy Public Endpoint  
        const datafromApi=await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0053713&lng=76.9646033&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        
        let CardData = datafromApi?.data?.data.cards;
        let cardmap = CardData.map(elements =>  elements.data)
         console.log(cardmap);
        setrestaurant(cardmap);
 }

  const isOnline = useOnline();
 /// check the internet connection.
  if(!isOnline){
    return (<NetworkChecker/>);
  }

 //early return | don't render component
//  if(!listOfrestaurant) return <h1>Empty</h1>;
    return  (
       <div className='body'>
        <h5 className="p-2 flex justify-center">Sugar, spice, and everything nice</h5>
      <div className='p-2  space-x-3 flex flex-row justify-center'>

  <input className="w-44 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
 
    
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 text-xs px-2 border border-blue-500 hover:border-transparent rounded" onClick={()=>{
           const FilteredList =  listOfrestaurant.filter((val)=>{
            return val.data.avgRating > 4.3 && val.data.avgRating<4.6;
            }
           )
           console.log({data :FilteredList});
           setrestaurant(FilteredList);
        }}>Top Rated Restaurant</button>
          
      </div>
         
        <div className='flex flex-wrap justify-evenly gap-2 gap-y-8'>
        {listOfrestaurant === undefined ? [1,2,3,4,5,6,7,8, 9,10,11,12].map((val) => {
          return <Shrimmer key={val} />
        }):listOfrestaurant.map(restaurant => <Link to={"/resdetail/"+restaurant.data.id}
         key={restaurant.data.id}
         >
        <RestroCard key={restaurant.data.id} resData = {restaurant}/> 
        </Link> 
        ) }  
 
        </div>
       </div>
    );
}

export default Body;       