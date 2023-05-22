import {IMAGE_URL} from '../utils/Constants';
import React from 'react'; 
 
const RestroCard = (props) => {
    const {resData}=props;
    // Destructue the code
    const {name,cuisines,totalRatings,area} = resData?.data;
   return (
        <div className='w-56 h-80 rounded-md p-2 bg-pink-100 drop-shadow-md flex flex-col space-x-3 gap-2 '>
        <img className=' rounded-md w-56 h-40' alt='res-image' src={`${IMAGE_URL}${resData.data.cloudinaryImageId}`} />
        <h3 className='text-base font-semibold'>{name}</h3>
        <h4>{cuisines.join(' , ')}</h4>
        {/* <h4>{totalRatings} + Ratings</h4> */}
        <h4>{area}</h4>
        </div>
    );
}
export default RestroCard;