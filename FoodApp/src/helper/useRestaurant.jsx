import React from 'react';
import axios from 'axios';
import { useEffect , useState } from 'react';
import useRestaurantinfo from './useRestaurantInfo';
// import useRestaurantinfo from './useRestaurantInfo';

const useRestaurant = (resId) => {
     
    const[resdetail , setResDetail] = useState(null);

    useEffect(()=>{
        async function getDetails(){
            const detail = await useRestaurantinfo(resId);
            setResDetail(detail);
        }

        getDetails();
       
     },[]);

  /*   async function getRestaurantInfo(){
        const data = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId='+resId);
        const HotelDetails = data?.data?.data?.cards[0]?.card?.card?.info;
        setResDetail(HotelDetails);
    }
 */
  
     


    return resdetail;
}

export default useRestaurant;