import {LOGO} from '../utils/Constants';
import { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import brandlogo from "../../assets/brand.png";
const Header = () => {
     
     
    return (
        <div className='flex place-content-between grad'>
            <div className='flex mx-4 my-2'>
                <Link to={'/'}><img className="px-4  h-12 w-22" src={brandlogo} alt='logo'/></Link>
                
            </div>
    
            <div className='nav-items'>
               <ul className='flex flex-row space-x-6 m-6 text-lg'>
                  <li><Link to="/home" className='nav-links text-base'>Home</Link></li>
                  <li><Link to="/about" className='nav-links text-base' >About Us</Link></li>
                  <li><Link to="/contact" className='nav-links text-base' >Contact Us</Link></li>
                  <li><Link to="/Instamart" className='nav-links text-base'>Instamart</Link></li>
                  <li><Link to="/cart" className='nav-links text-base' >Cart</Link></li>
               </ul>
            </div>
         <div className='flex items-center px-4'>
         <button className=' bg-red-500 hover:bg-red-700 py-2 px-4  text-white font-bold rounded-full'>Download App</button>

         </div>
        </div>
    )
}
export default Header;