import {IMAGE_URL} from '../utils/Constants';
import React from 'react'; 
 
const RestroCard = (props) => {
    const {resData}=props;
    // Destructue the code
    const {name,cuisines,totalRatings,area} = resData?.data;
   return (
        <div className='Restro-card'>
        <img className="res-logo" alt='res-image' src={`${IMAGE_URL}${resData.data.cloudinaryImageId}`} />
        <h3>{name}</h3>
        {/* <h4>{cuisines.join(' , ')}</h4> */}
        <h4>{totalRatings}</h4>
        <h4>{area}</h4>
        </div>
    );
}
export default RestroCard;