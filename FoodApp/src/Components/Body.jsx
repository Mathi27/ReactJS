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
      <div className='filter'>
        <button className="filter-btn" onClick={()=>{
           const FilteredList =  listOfrestaurant.filter((val)=>{
            return val.data.avgRating > 4.3 && val.data.avgRating<4.6;
            }
           )
           console.log({data :FilteredList});
           setrestaurant(FilteredList);
        }}>Top Rated Restaurant</button>
      </div>
        <div className='search-bar'>Search</div>
        <div className='restro-containers'>
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