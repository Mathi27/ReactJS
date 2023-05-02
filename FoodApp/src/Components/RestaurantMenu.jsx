import React from "react";
import axios from "axios";
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/Constants";
import Shrimmers from "./Shrimmer";
import useRestaurant from "../helper/useRestaurant";
const ResMenu = () =>{

    const paramss = useParams();
    console.log(paramss)
    const {id} = paramss;
    // custom hooks (Restaurant)
    const resdetail = useRestaurant(id);
     return  !resdetail? (<Shrimmers/>): (
        <div>
           <h1>{resdetail.name}</h1>
           <img className="res-image" src={IMAGE_URL+resdetail.cloudinaryImageId} />
            <p>{"Cuisines : "+resdetail.cuisines}</p>
            <p>{"Location : "+resdetail.locality}</p>
            <p>{"Rating: "+resdetail.avgRatingString}</p>
             <p>{resdetail.costForTwoMessage}</p>
        
        </div>
    );
}
export default ResMenu;