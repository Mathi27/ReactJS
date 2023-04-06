import RestroCard from "./RestroCard";
import MockData from "../utils/MockData";
import { useState } from 'react'; 
const Body = () =>{
  const [listOfrestaurant,setrestaurant]=useState(MockData);
    return (
       <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={()=>{
           const FilteredList =  listOfrestaurant.filter(({data})=>{
             
             console.log(data.avgRating)
            
            return data.avgRating>4}
           
           )
           console.log(FilteredList);
           setrestaurant(FilteredList);
        }}>Top Rated Restaurant</button>
      </div>
        <div className='search-bar'>Search</div>
        <div className='restro-containers'>
            
           {listOfrestaurant.map(restaurant => <RestroCard key={restaurant.data.id} resData = {restaurant}/>)}
            
            
        </div>
       </div>
    );
}
export default Body;