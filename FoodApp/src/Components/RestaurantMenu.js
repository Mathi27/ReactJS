import React from "react";
import axios from "axios";
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/Constants";
import Shrimmers from "./Shrimmer";

const ResMenu = () =>{
    const paramss = useParams();
    console.log(paramss)
    const {id} = paramss;
    const [resdetail,setResDetail] = useState(null);
    useEffect(()=>{
         getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId='+id);
        console.log(data);
        const HotelDetails = data?.data?.data?.cards[0]?.card?.card?.info;
         setResDetail(HotelDetails);        
    } 
 
   
    return  !resdetail? (<Shrimmers/>): (
        <div>
           <h1>{resdetail.name}</h1>
           <img className="res-image" src={IMAGE_URL+resdetail.cloudinaryImageId} />
            <p>{"Cuisines : "+resdetail.cuisines}</p>
            <p>{"Location : "+resdetail.locality}</p>
            <p>{"Rating: "+resdetail.avgRatingString}</p>
             <p>{resdetail.costForTwoMessage}</p>
        
        </div>
       
    )
}
export default ResMenu;