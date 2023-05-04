import React from "react";
import axios from 'axios';

const useRestaurantinfo = async(resId) => {
    
 const data = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId='+resId);
 const HotelDetails = data?.data?.data?.cards[0]?.card?.card?.info;
 return HotelDetails;
}

export default useRestaurantinfo;